import {Link} from 'react-router-dom'
import {
  VideoCard,
  Thumbnail,
  VideoInfo,
  ChannelLogo,
  VideoDetails,
  Title,
  ChannelName,
  VideoMeta,
  VideoLink,
} from './styledComponents'

const VideoItem = props => {
  const {video, isSavedPage = false} = props
  const {title, thumbnailUrl, viewCount, publishedAt, channel, id} = video

  return (
    <VideoLink to={`/videos/${id}`}>
      <VideoCard isSavedPage={isSavedPage}>
        <Thumbnail
          src={thumbnailUrl}
          alt="video thumbnail"
          isSavedPage={isSavedPage}
        />

        <VideoInfo isSavedPage={isSavedPage}>
          <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />

          <VideoDetails>
            <Title>{title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <VideoMeta>
              {viewCount} views • {publishedAt}
            </VideoMeta>
          </VideoDetails>
        </VideoInfo>
      </VideoCard>
    </VideoLink>
  )
}

export default VideoItem
