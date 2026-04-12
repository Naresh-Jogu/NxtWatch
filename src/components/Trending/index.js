import {useState, useEffect, useContext} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import Layout from '../Layout'
import VideoItem from '../VideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingContainer,
  TrendingHeader,
  VideosList,
  LoaderContainer,
  FailureContainer,
  RetryButton,
  FailureImage,
  FailureHeading,
  FailureText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Trending = () => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  const [videos, setVideos] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getTrendingVideos = async () => {
    setApiStatus(apiStatusConstants.loading)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))

      setVideos(updateData)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getTrendingVideos()
  }, [])

  const renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        height={50}
        width={50}
        color={isDarkTheme ? '#ffffff' : '#000000'}
      />
    </LoaderContainer>
  )

  const renderSuccessView = () => (
    <>
      <TrendingHeader isDarkTheme={isDarkTheme}>
        <HiFire size={25} color="red" />
        Trending
      </TrendingHeader>

      <VideosList>
        {videos.map(video => (
          <VideoItem key={video.id} video={video} />
        ))}
      </VideosList>
    </>
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

      <RetryButton type="button" onClick={getTrendingVideos}>
        Retry
      </RetryButton>
    </FailureContainer>
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

  return (
    <Layout>
      <TrendingContainer isDarkTheme={isDarkTheme}>
        {renderContent()}
      </TrendingContainer>
    </Layout>
  )
}

export default Trending
