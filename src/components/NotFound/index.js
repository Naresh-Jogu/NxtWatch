import {useContext} from 'react'

import Layout from '../Layout'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => {
  const {isDarkTheme} = useContext(NxtWatchContext)

  const imageUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

  return (
    <Layout>
      <NotFoundContainer isDarkTheme={isDarkTheme}>
        <NotFoundImage src={imageUrl} alt="not found" />
        <NotFoundHeading isDarkTheme={isDarkTheme}>
          Page Not Found
        </NotFoundHeading>
        <NotFoundText isDarkTheme={isDarkTheme}>
          We are sorry, the page you requested could not be found.
        </NotFoundText>
      </NotFoundContainer>
    </Layout>
  )
}

export default NotFound
