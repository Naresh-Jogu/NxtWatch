import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Layout from '../Layout'

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
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INTITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

const Gaming = () => {
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
    <LoaderContainer>
      <h1>Loading...</h1>
    </LoaderContainer>
  )

  const renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        width="300"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureText>
        We are having some trouble completing your request.
      </FailureText>
      <RetryButton type="button" onClick={getGamingVideos}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  const renderSuccessView = () => (
    <GamingContainer>
      <GamingHeader>
        <SiYoutubegaming size={25} color="red" />
        Gaming
      </GamingHeader>

      <GamingVideosList>
        {videos.map(video => (
          <Link to={`/gaming/${video.id}`} key={video.id}>
            <GamingVideoItem key={video.id}>
              <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />
              <VideoTitle>{video.title}</VideoTitle>
              <Views>{video.viewCount} Watching Worldwide</Views>
            </GamingVideoItem>
          </Link>
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
