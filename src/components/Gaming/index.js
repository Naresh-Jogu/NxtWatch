import {useState, useEffect, useContext} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Layout from '../Layout'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingContainer,
  GamingHeader,
  GamingVideosList,
  GamingVideoItem,
  Thumbnail,
  VideoTitle,
  Views,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  GamingTitle,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INTITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

const Gaming = () => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  const [videos, setVideos] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getGamingVideos = async () => {
    setApiStatus(apiStatusConstants.loading)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()

      const updateData = data.videos.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      setVideos(updateData)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getGamingVideos()
  }, [])

  const renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      {/* Change loader color based on theme */}
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : '#3b82f6'}
        height={50}
        width={50}
      />
    </LoaderContainer>
  )

  const renderFailureView = () => (
    <FailureContainer isDarkTheme={isDarkTheme}>
      <FailureImage
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureText isDarkTheme={isDarkTheme}>
        We are having some trouble completing your request. Please try again.
      </FailureText>
      <RetryButton type="button" onClick={getGamingVideos}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  const renderSuccessView = () => (
    <GamingContainer data-testid="gaming" isDarkTheme={isDarkTheme}>
      <GamingHeader isDarkTheme={isDarkTheme}>
        <div className="icon-container">
          <SiYoutubegaming size={30} color="#ff0000" />
        </div>
        <GamingTitle isDarkTheme={isDarkTheme}>Gaming</GamingTitle>
      </GamingHeader>

      <GamingVideosList>
        {videos.map(video => (
          <GamingVideoItem key={video.id}>
            <Link to={`/videos/${video.id}`} style={{textDecoration: 'none'}}>
              <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />
              <VideoTitle isDarkTheme={isDarkTheme}>{video.title}</VideoTitle>
              <Views isDarkTheme={isDarkTheme}>
                {video.viewCount} Watching Worldwide
              </Views>
            </Link>
          </GamingVideoItem>
        ))}
      </GamingVideosList>
    </GamingContainer>
  )

  const renderContent = () => {
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return <Layout>{renderContent()}</Layout>
}

export default Gaming
