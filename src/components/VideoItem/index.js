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
  const {title, thumbnailUrl, viewCount, publishedAt, channel} = video

  return (
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
  )
}

export default VideoItem
