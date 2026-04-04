import SideBar from '../SideBar'
import Header from '../Header'

import {
  BodyContainer,
  LayoutContainer,
  Content,
  SideBarWrapper,
} from './styledComponents'

const Layout = ({children}) => (
  <LayoutContainer>
    <Header />

    <BodyContainer>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <Content>{children}</Content>
    </BodyContainer>
  </LayoutContainer>
)

export default Layout
