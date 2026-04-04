import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 70px;
  border-bottom: 1px solid #e2e8f0;

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
`

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;

  @media screen and (min-width: 768px) {
    display: none; // Hide on desktop
  }
`

export const ProfileImage = styled.img`
  width: 30px;
  display: none; // Hide on mobile

  @media screen and (min-width: 768px) {
    display: block; // Show on desktop
  }
`

export const LogoutButton = styled.button`
  display: none; // Hide text button on mobile
  background-color: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  border-radius: 2px;
  padding: 5px 15px;
  font-weight: bold;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: block; // Show text button on desktop
  }
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  padding: 15px 0;
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

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
  background-color: #ffffff;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media screen and (min-width: 768px) {
    display: none; /* Never show dropdown on desktop */
  }
`
