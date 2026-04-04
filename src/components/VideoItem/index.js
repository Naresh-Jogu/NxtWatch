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
} from './styledComponents'

const VideoItem = props => {
  const {video} = props
  const {title, thumbnailUrl, viewCount, publishedAt, channel, id} = video

  return (
    <Link to={`/videos/${id}`}>
      <VideoCard>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />

        <VideoInfo>
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
    </Link>
  )
}

export default VideoItem
