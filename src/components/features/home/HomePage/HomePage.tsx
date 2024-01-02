import { BackMessages } from '@features/backChat'
import { ChatPage } from '@features/chat'

import { HomePageContainer } from './HomePage.elements'

export const HomePage = () => {
  return (
    <HomePageContainer>
      <ChatPage />
    </HomePageContainer>
  )
}
