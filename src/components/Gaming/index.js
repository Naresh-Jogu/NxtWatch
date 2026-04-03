import {useState, useEffect} from 'react'
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
      console.log(data)

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
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        alt="failure view"
        width="300"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble completing your request.</p>
      <button type="button" onClick={getGamingVideos}>
        Retry
      </button>
    </div>
  )

  const renderSuccessView = () => (
    <GamingContainer>
      <GamingHeader>
        <SiYoutubegaming size={25} color="red" />
        Gaming
      </GamingHeader>

      <GamingVideosList>
        {videos.map(video => (
          <GamingVideoItem key={video.id}>
            <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />
            <VideoTitle>{video.title}</VideoTitle>
            <Views>{video.viewCount} Watching Worldwide</Views>
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
