import {useContext} from 'react'
import SideBar from '../SideBar'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  BodyContainer,
  LayoutContainer,
  Content,
  SideBarWrapper,
} from './styledComponents'

const Layout = ({children}) => {
  const {isDarkTheme} = useContext(NxtWatchContext)

  return (
    <LayoutContainer isDarkTheme={isDarkTheme}>
      <Header />

      <BodyContainer>
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>

        <Content isDarkTheme={isDarkTheme}>{children}</Content>
      </BodyContainer>
    </LayoutContainer>
  )
}

export default Layout
