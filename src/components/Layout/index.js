import SideBar from '../SideBar'
import Header from '../Header'

import {BodyContainer, LayoutContainer, Content} from './styledComponents'

const Layout = ({children}) => (
  <LayoutContainer>
    <Header />

    <BodyContainer>
      <SideBar />
      <Content>{children}</Content>
    </BodyContainer>
  </LayoutContainer>
)

export default Layout
