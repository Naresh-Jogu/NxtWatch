import {useState} from 'react'
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'

import {FiSun, FiMoon} from 'react-icons/fi'

import {
  HeaderContainer,
  Logo,
  NavItems,
  ThemeButton,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const history = useHistory()

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev)
  }

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <HeaderContainer>
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
      <NavItems>
        <ThemeButton onClick={toggleTheme}>
          {isDarkTheme ? <FiSun size={22} /> : <FiMoon size={22} />}
        </ThemeButton>
        <ProfileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
      </NavItems>
    </HeaderContainer>
  )
}

export default Header
