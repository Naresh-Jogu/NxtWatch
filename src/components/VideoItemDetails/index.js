import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {LoaderContainer} from './styledComponents'
import Layout from '../Layout'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const VideoItemDetails = props => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [videoData, setVideoData] = useState({})

  const getVideoDetails = async () => {
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
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        thumbnailUrl: data.video_details.thumbnail_url,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }

      setVideoData(updateData)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getVideoDetails()
  }, [])

  const renderLoadingView = () => (
    <LoaderContainer>
      <h1>Loading...</h1>
    </LoaderContainer>
  )

  const renderSuccessView = () => (
    <div>
      <ReactPlayer url={videoData.videoUrl} width="100%" />
      <h1>{videoData.title}</h1>
      <p>{videoData.viewCount} views</p>
      <div>
        <img
          src={videoData.channel.profileImageUrl}
          alt="channel logo"
          width="40"
        />

        <div>
          <p>{videoData.channel.name}</p>
          <p>{videoData.channel.subscriberCount} subscribers</p>
        </div>
      </div>
      <p>{videoData.description}</p>
    </div>
  )

  const renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <button type="button" onClick={getVideoDetails}>
        Retry
      </button>
    </div>
  )

  const renderVideoDetails = () => {
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

  return <Layout>{renderVideoDetails()}</Layout>
}

export default VideoItemDetails
