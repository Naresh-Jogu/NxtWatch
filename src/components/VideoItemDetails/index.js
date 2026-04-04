import {useState, useEffect} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {
  VideoDetailContainer,
  PlayerWrapper,
  VideoTitle,
  VideoStatusContainer,
  VideoStatusText,
  VideoDot,
  HrLine,
  ChannelContainer,
  ChannelImage,
  ChannelInfo,
  ChannelName,
  Subscribers,
  LoaderContainer,
  VideoDescription,
  ReactionButtonsContainer,
  ReactionButton,
} from './styledComponents'

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
  const [isLiked, setIsLiked] = useState(false)
  const [isDisLiked, setIsDisLiked] = useState(false)

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

  const onClickLike = () => {
    setIsLiked(prev => !prev)
    setIsDisLiked(false)
  }

  const onClickDislike = () => {
    setIsDisLiked(prev => !prev)
    setIsLiked(false)
  }

  const renderLoadingView = () => (
    <LoaderContainer>
      <h1>Loading...</h1>
    </LoaderContainer>
  )

  const publishedDate = videoData.publishedAt
    ? formatDistanceToNow(new Date(videoData.publishedAt))
    : ''

  const renderSuccessView = () => (
    <VideoDetailContainer>
      <PlayerWrapper>
        <ReactPlayer
          url={videoData.videoUrl}
          controls
          width="100%"
          height="100%"
        />
      </PlayerWrapper>
      <VideoTitle>{videoData.title}</VideoTitle>
      <VideoStatusContainer>
        <VideoStatusText>
          {videoData.viewCount} views <VideoDot> &#8226; </VideoDot>{' '}
          {publishedDate} ago
        </VideoStatusText>
        {/* Buttons like Save/Like would go here in a real app */}

        <ReactionButtonsContainer>
          <ReactionButton type="button" active={isLiked} onClick={onClickLike}>
            <AiOutlineLike size={20} />
            Like
          </ReactionButton>

          <ReactionButton
            type="button"
            active={isDisLiked}
            onClick={onClickDislike}
          >
            <AiOutlineDislike size={20} />
            Dislike
          </ReactionButton>
        </ReactionButtonsContainer>
      </VideoStatusContainer>
      <HrLine />
      <ChannelContainer>
        <ChannelImage
          src={videoData.channel.profileImageUrl}
          alt="channel logo"
        />
        <ChannelInfo>
          <ChannelName>{videoData.channel.name}</ChannelName>
          <Subscribers>
            {videoData.channel.subscriberCount} subscribers
          </Subscribers>
          <VideoDescription>{videoData.description}</VideoDescription>
        </ChannelInfo>
      </ChannelContainer>
    </VideoDetailContainer>
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
