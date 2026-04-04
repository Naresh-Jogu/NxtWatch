import {useState} from 'react'
import Cookies from 'js-cookie'
import {useHistory, Link} from 'react-router-dom'
import {FiSun, FiMoon, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome, AiTwotoneFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {IoMdClose} from 'react-icons/io'

import {
  HeaderContainer,
  Logo,
  NavItems,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  IconButton,
  MobileMenuOverlay,
  MenuLink,
} from './styledComponents'

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const history = useHistory()

  const toggleTheme = () => setIsDarkTheme(prev => !prev)
  const toggleMenu = () => setMenuOpen(prev => !prev)

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
      </Link>

      <NavItems>
        <ThemeButton onClick={toggleTheme}>
          {isDarkTheme ? <FiSun size={25} /> : <FiMoon size={25} />}
        </ThemeButton>

        {/* Mobile Hamburger */}
        <IconButton type="button" onClick={toggleMenu}>
          <GiHamburgerMenu size={25} />
        </IconButton>

        <ProfileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />

        <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>

        <IconButton type="button" onClick={onClickLogout}>
          <FiLogOut size={25} />
        </IconButton>
      </NavItems>

      {/* Mobile Dropdown Overlay */}
      {isMenuOpen && (
        <MobileMenuOverlay>
          <IconButton
            style={{alignSelf: 'flex-end', marginBottom: '30px'}}
            onClick={toggleMenu}
          >
            <IoMdClose size={30} />
          </IconButton>

          <MenuLink to="/" onClick={toggleMenu}>
            <AiFillHome size={20} /> Home
          </MenuLink>
          <MenuLink to="/trending" onClick={toggleMenu}>
            <AiTwotoneFire size={20} /> Trending
          </MenuLink>
          <MenuLink to="/gaming" onClick={toggleMenu}>
            <SiYoutubegaming size={20} /> Gaming
          </MenuLink>
          <MenuLink to="/saved-videos" onClick={toggleMenu}>
            <MdPlaylistAdd size={20} /> Saved videos
          </MenuLink>
        </MobileMenuOverlay>
      )}
    </HeaderContainer>
  )
}

export default Header
