import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  SidebarContainer,
  NavList,
  NavItem,
  NavLink,
  ContactSection,
  ContactHeading,
  SocialIcons,
  SocialImage,
  ContactText,
} from './styledComponents'

const SideBar = () => (
    <SidebarContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <AiFillHome size={22} />
            <p>Home</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/trending">
            <HiFire size={22} />
            <p>Trending</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/gaming">
            <SiYoutubegaming size={22} />
            <p>Gaming</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/saved-videos">
            <MdPlaylistAdd size={22} />
            <p>Saved Videos</p>
          </NavLink>
        </NavItem>
      </NavList>

      <ContactSection>
        <ContactHeading>CONTACT US</ContactHeading>
        <SocialIcons>
          <SocialImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <SocialImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </SocialIcons>
        <ContactText>
          Enjoy! Now to see your channels and recommendations!
        </ContactText>
      </ContactSection>
    </SidebarContainer>
  )

export default SideBar
