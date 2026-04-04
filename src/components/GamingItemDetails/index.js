import {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'

import {LoaderContainer} from './styledComponents'
import Layout from '../Layout'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const GamingItemDetails = props => {
  const [gamingVideo, setGamingVideo] = useState({})
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getGamingVideo = async () => {
    setApiStatus(apiStatusConstants.loading)
    const jwtToken = Cookies.get('jwt_token')
    const {match} = props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`

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
      const updateData = {
        id: data.video_details.id,
        title: data.video_details.title,
        thumbnailUrl: data.video_details.thumbnail_url,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }

      setGamingVideo(updateData)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getGamingVideo()
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
      />
      <h1>Oops! Something Went Wrong</h1>
      <button type="button" onClick={getGamingVideo}>
        Retry
      </button>
    </div>
  )

  const renderSuccessView = () => (
    <div>
      <ReactPlayer
        url={gamingVideo.videoUrl}
        width="100%"
        height="400px"
        controls
      />

      <h1>{gamingVideo.title}</h1>
      <p>{gamingVideo.viewCount} Watching Worldwide</p>
    </div>
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

export default GamingItemDetails
