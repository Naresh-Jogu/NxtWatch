import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoCard = styled.li`
  width: 100%;
  margin-bottom: 24px;
  cursor: pointer;
  display: ${props => (props.isSavedPage ? 'flex' : 'block')};
  align-items: flex-start;
`

export const Thumbnail = styled.img`
  width: ${props => (props.isSavedPage ? '240px' : '100%')};
  height: ${props => (props.isSavedPage ? '135px' : 'auto')};
  border-radius: 6px;
  flex-shrink: 0;
`

export const VideoInfo = styled.div`
  display: flex;
  margin-top: ${props => (props.isSavedPage ? '0px' : '12px')};
  margin-left: ${props => (props.isSavedPage ? '20px' : '0px')};
  width: 100%;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #1e293b;
  line-height: 1.5;
  word-break: break-word;
`

export const ChannelName = styled.p`
  font-size: 14px;
  margin: 6px 0;
  color: #64748b;
`

export const VideoMeta = styled.p`
  font-size: 13px;
  color: #64748b;
`
