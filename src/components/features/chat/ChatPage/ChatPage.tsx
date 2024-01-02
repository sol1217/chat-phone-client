'use client'

import React, { useState, useEffect } from 'react'
import { FaWifi } from 'react-icons/fa'
import { FaImage } from 'react-icons/fa'
import { GrAdd } from 'react-icons/gr'
import { IoChevronBack } from 'react-icons/io5'
import { MdSignalWifiConnectedNoInternet4 } from 'react-icons/md'
import { io } from 'socket.io-client'
import { v4 as uuid } from 'uuid'

import { GetDate } from '@hooks'
import { SelectImage } from '@features/selectImage/selectImage'
import {
  InputImage,
  LabelImage,
  SendButton,
  MessageSent,
  InputMessage,
  UserContainer,
  PictureMessage,
  BackMessageLink,
  GetHourContainer,
  ChatPageContainer,
  NameUserContainer,
  ConnectionConatiner,
  FooterPageContainer,
  HeaderChatContainer,
  InputImageContainer,
  ChatMessageContainer,
  InformationContainer,
  UserMessageContainer,
} from '@features/chat/ChatPage/ChatPage.elements'
import { getCurrentTime } from '@features/chat/ChatPage/ChatPage.helpers'
import { User, Message } from '@features/chat/ChatPage/chatPage.types'

export const ChatPage = () => {
  const [socket, _setSocket] = useState(io('http://localhost:5030'))
  const [isConnected, setIsConnected] = useState(false)
  const [message, setMessage] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [user, setUser] = useState<User>({
    uuid: '',
    name: '',
    avatar: SelectImage,
  })

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connect')
      setIsConnected(true)
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    socket.on('message', (message) => {
      setMessage((prevState) => [...prevState, message])
    })

    return () => {
      socket.disconnect()
    }
  }, [socket])

  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      uuid: uuid(),
      name: prompt('What is your name') || 'Sol',
    }))
  }, [])

  const sendHandler = () => {
    if (!user) return

    const formData = new FormData()
    formData.append('text', inputValue)
    // @ts-ignore
    formData.append('file', selectedImage)

    const message: Message = {
      uuid: uuid(),
      user,
      text: inputValue,
      image: selectedImage,
      date: new Date(),
    }

    socket.emit('message', message)

    setMessage((prevState) => [...prevState, message])

    setInputValue('')
    setSelectedImage(null)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendHandler()
    }
  }

  const handleFileChange = (e: any) => {
    const file = e.target.files[0]

    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedImage(file)
      } else {
        alert('Please select an image file')
      }
    }
  }

  return (
    <ChatPageContainer>
      <HeaderChatContainer>
        <InformationContainer>
          <GetDate />
          <ConnectionConatiner>
            <p>{isConnected ? 'Connect' : 'Disconnect'}</p>
            {isConnected ? <FaWifi /> : <MdSignalWifiConnectedNoInternet4 />}
          </ConnectionConatiner>
        </InformationContainer>

        <NameUserContainer>
          <BackMessageLink href="/backChat">
            <IoChevronBack style={{ fontSize: '25px' }} />
          </BackMessageLink>
          <UserContainer>
            <SelectImage size={36} />
            <h3>{user?.name}</h3>
          </UserContainer>
        </NameUserContainer>
      </HeaderChatContainer>

      <ChatMessageContainer>
        {message.map((message) => (
          <UserMessageContainer key={message.uuid} $incoming={message.user.uuid !== user?.uuid}>
            {message.image && message.image instanceof Blob ? (
              <PictureMessage src={URL.createObjectURL(message.image)} alt="Selected" />
            ) : (
              <MessageSent>
                {message.text}
                <GetHourContainer>{getCurrentTime(new Date(message.date))}</GetHourContainer>
              </MessageSent>
            )}
          </UserMessageContainer>
        ))}
      </ChatMessageContainer>

      <FooterPageContainer>
        <InputImageContainer>
          <InputImage onChange={handleFileChange} type="file" placeholder="+" />
          <LabelImage>{selectedImage ? <FaImage /> : <GrAdd />}</LabelImage>
        </InputImageContainer>
        <InputMessage
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          onKeyPress={handleKeyPress}
          placeholder="Aa"
        />
        <SendButton onClick={sendHandler} disabled={!inputValue.trim() && !selectedImage}>
          Send
        </SendButton>
      </FooterPageContainer>
    </ChatPageContainer>
  )
}
