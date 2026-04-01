import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 70px;
  min-height: 70px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`
export const Logo = styled.img`
  width: 150px;
`

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const ThemeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const ProfileImage = styled.img`
  width: 35px;
`

export const LogoutButton = styled.button`
  padding: 6px 14px;
  border: 1px solid #3b82f6;
  background: transparent;
  color: #3b82f6;
  border-radius: 4px;
  cursor: pointer;
`
