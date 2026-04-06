import styled from 'styled-components'
import {NavLink as RouterNavLink} from 'react-router-dom'

export const SidebarContainer = styled.div`
  width: 240px;
  flex-shrink: 0;
  border-right: 1px solid #e2e8f0;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const NavItem = styled.li`
  cursor: pointer;
`

// export const NavLink = styled(RouterNavLink)`
//   display: flex;
//   align-items: center;
//   gap: 15px;
//   text-decoration: none;
//   color: #475569;
//   font-weight: 500;
//   padding: 10px;
//   border-radius: 4px;

//   transition: all 0.2s ease;

//   &:hover {
//     background-color: #e2e8f0;
//     color: #ff0000;
//   }
// `

export const NavLink = styled(RouterNavLink).attrs({
  activeClassName: 'active',
})`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #475569;
  padding: 0px 20px;
  gap: 20px;

  &.active {
    background-color: #f1f5f9;
    color: #ff0000;

    p {
      font-weight: bold;
      color: #1e293b;
    }

    svg {
      color: #ff0000;
    }
  }
`

export const ContactSection = styled.div`
  margin-top: 40px;
`

export const ContactHeading = styled.p`
  font-weight: bold;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`

export const SocialImage = styled.img`
  width: 30px;
`
export const ContactText = styled.p`
  font-size: 14px;
`
