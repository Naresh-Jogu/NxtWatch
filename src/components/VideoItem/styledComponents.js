import styled from 'styled-components'

export const VideoCard = styled.li`
  width: 260px;
  margin-bottom: 30px;
  cursor: pointer;
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const VideoInfo = styled.div`
  display: flex;
  margin-top: 12px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: #1e293b;
  line-height: 1.4;
`

export const ChannelName = styled.p`
  font-size: 13px;
  margin: 4px 0;
  color: #64748b;
`

export const VideoMeta = styled.p`
  font-size: 12px;
  color: #64748b;
`
