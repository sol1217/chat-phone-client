'use client'

import { useRef, useState, useEffect } from 'react'
import { FaWifi } from 'react-icons/fa'
import { MdSignalWifiConnectedNoInternet4 } from 'react-icons/md'
import { RiAddCircleLine } from 'react-icons/ri'
import { io } from 'socket.io-client'

import { GetDate } from '@hooks'
import { SelectImage } from '@features/selectImage'
import {
  NewChat,
  UserWrap,
  MessagesView,
  NewChatContainer,
  MessagesContainer,
  ConnectionConatiner,
  InformationContainer,
  MessageViewContainer,
} from '@features/backChat/BackMessages/BackMessages.elements'

export const BackMessages = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [socket, _setSocket] = useState(io('http://localhost:5030'))

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connect')
      setIsConnected(true)
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
    })
  }, [socket])

  const getCurrentDate = () => {
    let currentDate = new Date()
    return `${currentDate.getMonth() + 1}/${currentDate.getDate()}`
  }

  const openNewChat = () => {
    window.open('/', '_blank')
  }

  return (
    <MessageViewContainer>
      <InformationContainer>
        <GetDate />
        <ConnectionConatiner>
          <p>{isConnected ? 'Connect' : 'Disconnect'}</p>
          {isConnected ? <FaWifi /> : <MdSignalWifiConnectedNoInternet4 />}
        </ConnectionConatiner>
      </InformationContainer>

      <MessagesView>
        <h1>Messages</h1>
        <NewChatContainer>
          <p>Open New Chat</p>
          <NewChat onClick={openNewChat}>
            <RiAddCircleLine style={{ fontSize: '20px' }} />
          </NewChat>
        </NewChatContainer>

        <MessagesContainer href="/">
          <UserWrap>
            <SelectImage size={50} />
            <div>
              <h3>Your Chat</h3>
              <p></p>
            </div>
          </UserWrap>
          <h4>{getCurrentDate()}</h4>
        </MessagesContainer>
      </MessagesView>
    </MessageViewContainer>
  )
}
