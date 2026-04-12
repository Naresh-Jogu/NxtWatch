import {useState, useContext} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {useHistory, Link} from 'react-router-dom'
import {FiSun, FiMoon, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome, AiTwotoneFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {IoMdClose} from 'react-icons/io'
import NxtWatchContext from '../../context/NxtWatchContext'
import 'reactjs-popup/dist/index.css'

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
  PopupContainer,
  ConfirmButton,
  CancelButton,
  PopupButtonsContainer,
  PopupText,
} from './styledComponents'

const Header = () => {
  const {isDarkTheme, toggleTheme} = useContext(NxtWatchContext)

  const [isMenuOpen, setMenuOpen] = useState(false)
  const history = useHistory()

  const toggleMenu = () => setMenuOpen(prev => !prev)

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <HeaderContainer isDarkTheme={isDarkTheme}>
      <Link to="/">
        <Logo
          src={
            isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
          alt="website logo"
        />
      </Link>

      <NavItems>
        <ThemeButton
          data-testid="theme"
          type="button"
          onClick={toggleTheme}
          isDarkTheme={isDarkTheme}
        >
          {isDarkTheme ? <FiSun size={25} /> : <FiMoon size={25} />}
        </ThemeButton>

        {/* Mobile Hamburger */}
        <IconButton
          type="button"
          onClick={toggleMenu}
          isDarkTheme={isDarkTheme}
        >
          <GiHamburgerMenu size={25} />
        </IconButton>

        <ProfileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />

        <Popup modal center trigger={<LogoutButton>Logout</LogoutButton>}>
          {close => (
            <PopupContainer isDarkTheme={isDarkTheme}>
              <PopupText isDarkTheme={isDarkTheme}>
                Are you sure, you want to logout
              </PopupText>

              <PopupButtonsContainer>
                <CancelButton type="button" onClick={() => close()}>
                  Cancel
                </CancelButton>

                <ConfirmButton type="button" onClick={onClickLogout}>
                  Confirm
                </ConfirmButton>
              </PopupButtonsContainer>
            </PopupContainer>
          )}
        </Popup>

        <Popup
          modal
          trigger={
            <IconButton type="button" isDarkTheme={isDarkTheme}>
              <FiLogOut size={25} />
              <span style={{display: 'none'}}>Logout</span>
            </IconButton>
          }
        >
          {close => (
            <div style={{padding: '20px', textAlign: 'center'}}>
              <p>Are you sure, you want to logout</p>

              <button
                type="button"
                onClick={() => close()}
                style={{marginRight: '10px'}}
              >
                Cancel
              </button>

              <button type="button" onClick={onClickLogout}>
                Confirm
              </button>
            </div>
          )}
        </Popup>
      </NavItems>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenuOverlay isDarkTheme={isDarkTheme}>
          <IconButton
            style={{alignSelf: 'flex-end', marginBottom: '30px'}}
            onClick={toggleMenu}
            isDarkTheme={isDarkTheme}
          >
            <IoMdClose size={30} />
          </IconButton>

          <MenuLink to="/" onClick={toggleMenu} isDarkTheme={isDarkTheme}>
            <AiFillHome size={20} /> Home
          </MenuLink>

          <MenuLink
            to="/trending"
            onClick={toggleMenu}
            isDarkTheme={isDarkTheme}
          >
            <AiTwotoneFire size={20} /> Trending
          </MenuLink>

          <MenuLink to="/gaming" onClick={toggleMenu} isDarkTheme={isDarkTheme}>
            <SiYoutubegaming size={20} /> Gaming
          </MenuLink>

          <MenuLink
            to="/saved-videos"
            onClick={toggleMenu}
            isDarkTheme={isDarkTheme}
          >
            <MdPlaylistAdd size={20} /> Saved videos
          </MenuLink>
        </MobileMenuOverlay>
      )}
    </HeaderContainer>
  )
}

export default Header
