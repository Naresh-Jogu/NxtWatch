import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import Layout from '../Layout'
import VideoItem from '../VideoItem'

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
      <h1>Loading...</h1>
    </LoaderContainer>
  )

  const renderSuccessView = () => (
    <>
      <TrendingHeader>
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
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureText>
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
      <TrendingContainer>{renderContent()}</TrendingContainer>
    </Layout>
  )
}

export default Trending
