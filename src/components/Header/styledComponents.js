import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 70px;
  border-bottom: 1px solid #e2e8f0;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};

  @media screen and (min-width: 768px) {
    padding: 20px 50px;
  }
`

export const Logo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 140px;
  }
`

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    gap: 25px;
  }
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};

  @media screen and (min-width: 768px) {
    display: none; // Hide on desktop
  }
`

export const ProfileImage = styled.img`
  width: 30px;

  @media screen and (min-width: 768px) {
    display: block; // Show on desktop
  }
`

export const LogoutButton = styled.button`
  display: none; // Hide text button on mobile

  border: 1px solid #3b82f6;
  color: #3b82f6;
  border-radius: 2px;
  padding: 5px 15px;
  font-weight: bold;
  cursor: pointer;

  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};

  @media screen and (min-width: 768px) {
    display: block; // Show text button on desktop
  }
`

export const MenuLink = styled(Link)`
  font-family: 'Roboto';
  font-size: 18px;
  padding: 15px 0;
  display: flex;
  width: 100%;

  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #f1f1f1;
    font-weight: bold;
  }
`

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media screen and (min-width: 768px) {
    display: none; /* Never show dropdown on desktop */
  }
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 12px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 400px;
`

export const PopupText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 24px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#00306e')};
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #7e858e;
  color: #7e858e;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #f1f1f1;
  }
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #2563eb;
  }
`
