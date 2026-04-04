import {IoMdClose} from 'react-icons/io'
import {
  BannerContainer,
  BannerLeftPart,
  BannerRightPart,
  BannerLogo,
  BannerText,
  BannerButton,
  CloseButton,
} from './styledComponents'

const SubscriptionBanner = ({showBanner, onCloseBanner}) => (
  <>
    {showBanner && (
      <BannerContainer data-testid="banner">
        <BannerLeftPart>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
          <BannerButton type="button">GET IT NOW</BannerButton>
        </BannerLeftPart>
        <BannerRightPart>
          <CloseButton
            type="button"
            data-testid="close"
            onClick={onCloseBanner}
          >
            <IoMdClose size={20} />
          </CloseButton>
        </BannerRightPart>
      </BannerContainer>
    )}
  </>
)

export default SubscriptionBanner
