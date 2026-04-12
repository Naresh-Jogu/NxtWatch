import {useState, useEffect, useContext} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'

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
  FailureContainer,
  FailureImage,
  FailureHeading,
  RetryButton,
  SaveVideoButton,
  SaveButtonCard,
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
  const {savedVideos, addOrRemoveVideo, isDarkTheme} = useContext(
    NxtWatchContext,
  )

  const isSaved = Array.isArray(savedVideos)
    ? savedVideos.some(each => each.id === videoData.id)
    : false

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

      const updateData = {
        title: data.video_details.title,
        id: data.video_details.id,
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
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        height={50}
        width={50}
        color={isDarkTheme ? '#ffffff' : '#000000'}
      />
    </LoaderContainer>
  )

  const publishedDate = videoData.publishedAt
    ? formatDistanceToNow(new Date(videoData.publishedAt))
    : ''

  const renderSuccessView = () => (
    <VideoDetailContainer isDarkTheme={isDarkTheme}>
      <PlayerWrapper>
        <ReactPlayer
          url={videoData.videoUrl}
          controls
          width="100%"
          height="100%"
        />
      </PlayerWrapper>

      <VideoTitle isDarkTheme={isDarkTheme}>{videoData.title}</VideoTitle>

      <VideoStatusContainer>
        <VideoStatusText isDarkTheme={isDarkTheme}>
          {videoData.viewCount} views <VideoDot> &#8226; </VideoDot>
          {publishedDate} ago
        </VideoStatusText>

        <ReactionButtonsContainer>
          <ReactionButton
            type="button"
            active={isLiked}
            onClick={onClickLike}
            isDarkTheme={isDarkTheme}
          >
            <AiOutlineLike size={20} />
            Like
          </ReactionButton>

          <ReactionButton
            type="button"
            active={isDisLiked}
            onClick={onClickDislike}
            isDarkTheme={isDarkTheme}
          >
            <AiOutlineDislike size={20} />
            Dislike
          </ReactionButton>

          <SaveButtonCard>
            <MdPlaylistAdd />
            <SaveVideoButton
              type="button"
              onClick={() => addOrRemoveVideo(videoData)}
              isDarkTheme={isDarkTheme}
            >
              {isSaved ? 'Saved' : 'Save'}
            </SaveVideoButton>
          </SaveButtonCard>
        </ReactionButtonsContainer>
      </VideoStatusContainer>

      <HrLine />

      <ChannelContainer>
        <ChannelImage
          src={videoData.channel.profileImageUrl}
          alt="channel logo"
        />

        <ChannelInfo>
          <ChannelName isDarkTheme={isDarkTheme}>
            {videoData.channel.name}
          </ChannelName>

          <Subscribers isDarkTheme={isDarkTheme}>
            {videoData.channel.subscriberCount} subscribers
          </Subscribers>

          <VideoDescription isDarkTheme={isDarkTheme}>
            {videoData.description}
          </VideoDescription>
        </ChannelInfo>
      </ChannelContainer>
    </VideoDetailContainer>
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
      <RetryButton type="button" onClick={getVideoDetails}>
        Retry
      </RetryButton>
    </FailureContainer>
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
