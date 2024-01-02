import Link from 'next/link'
import styled from 'styled-components'

export const MessageViewContainer = styled.div`
  width: 360px;
  height: 653px;
  border-radius: 37px;
  background-color: #cadaf5;
  border: 4px solid;
  margin: 60px auto;
`

export const MessagesView = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  padding: 10px;
`

export const MessagesContainer = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px 5px 10px;
  text-align: start;
  background-color: rgba(216, 191, 216, 0.25);
  cursor: pointer;
  border: none;
  border-radius: 10px;

  &:active {
    background-color: rgba(230, 230, 250, 0.27);
  }
`

export const UserWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`

export const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 5px 20px;
  background-color: rgba(176, 196, 222, 0.66);
  border-radius: 40px 40px 0 0;
  width: 353px;
`

export const ConnectionConatiner = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  padding: 5px;
`

export const NewChatContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  background-color: lightsteelblue;
`

export const NewChat = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background-color: indianred;
    border-radius: 50%;
  }
`
