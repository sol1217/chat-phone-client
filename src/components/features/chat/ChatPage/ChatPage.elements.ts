'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'

export const ChatPageContainer = styled.main`
  height: 660px;
  width: 360px;
  border-radius: 40px;
  background: linear-gradient(salmon, lightsteelblue, lightpink);
  border: 4px solid;
  position: relative;
`

export const HeaderChatContainer = styled.div`
  position: absolute;
  top: 0;
  width: 360px;
`

export const NameUserContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: start;
  gap: 20px;
  align-items: center;
  font-family: Arial;
  border-bottom: 1px solid rgba(176, 196, 222, 0.29);
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

export const BackMessageLink = styled(Link)`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const UserContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  user-select: none;
`

export const ChatMessageContainer = styled.div`
  margin-top: 120px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const MessageSent = styled.div`
  width: 200px;
  padding: 5px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 0 5px 0 antiquewhite;
  display: flex;
  justify-content: space-between;
`

export const GetHourContainer = styled.span`
  font-size: 12px;
  display: flex;
  justify-content: end;
  align-items: end;
`

export const PictureMessage = styled.img`
  width: 170px;
  height: 140px;
  border: 4px solid darkslategrey;
  border-radius: 10px;
  object-fit: cover;
`

export const UserMessageContainer = styled.div<{ $incoming: boolean }>`
  display: flex;
  justify-content: ${({ $incoming }) => ($incoming ? 'flex-start' : 'flex-end')};
  align-items: end;
  gap: 5px;

  ${MessageSent} {
    ${({ $incoming }) =>
      $incoming &&
      css`
        background-color: rgba(229, 149, 250, 0.31);
        color: #222222;
      `}
  }
`

export const FooterPageContainer = styled.main`
  position: absolute;
  bottom: 0;
  margin-top: 419px;
  border-top: 1px solid rgba(176, 196, 222, 0.65);
  width: 353px;
  height: 60px;
  border-radius: 0 0 40px 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const InputImageContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`

export const InputImage = styled.input`
  width: inherit;
  height: inherit;
  left: 0;
  opacity: 0;
  cursor: pointer;
`

export const InputMessage = styled.input`
  border: none;
  width: 180px;
  border-radius: 20px;
  padding: 7px;
  background-color: rgba(230, 230, 250, 0.56);
`

export const LabelImage = styled.label`
  position: absolute;
  z-index: 0;
  left: 13px;
  top: 13px;
`

export const SendButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 7px 15px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? 'rgba(179,182,185,0.58)' : ' #3496f6')};
  transition: transform 0s ease-in-out;

  &:active {
    transform: ${(props) => (props.disabled ? 'scale(1) ' : 'scale(0.89) ')};
  }
`
