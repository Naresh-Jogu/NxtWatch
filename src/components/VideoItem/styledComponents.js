import styled from 'styled-components'
import {Link} from 'react-router-dom'

// Helper for consistency
const devices = {
  mobile: '576px',
  tablet: '768px',
}

export const VideoLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const VideoCard = styled.li`
  display: flex;
  flex-direction: ${props => (props.isSavedPage ? 'row' : 'column')};
  width: 100%;
  margin-bottom: 32px;
  cursor: pointer;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  list-style-type: none;

  @media screen and (max-width: ${devices.tablet}) {
    flex-direction: column;
    margin-bottom: 24px;
  }
`

export const Thumbnail = styled.img`
  width: ${props => (props.isSavedPage ? '300px' : '100%')};
  aspect-ratio: 16 / 9;
  border-radius: ${props => (props.isSavedPage ? '12px' : '0px')};
  object-fit: cover;
  flex-shrink: 0;

  @media screen and (max-width: ${devices.tablet}) {
    width: 100%;
    border-radius: 0px; /* Full width mobile look */
  }
`

export const VideoInfo = styled.div`
  display: flex;
  padding: 12px;
  width: 100%;
  margin-left: ${props => (props.isSavedPage ? '16px' : '0px')};

  @media screen and (max-width: ${devices.tablet}) {
    margin-left: 0;
    padding: 12px 16px;
  }
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
  /* Hide logo on Saved Page horizontal view to mimic YouTube */
  display: ${props => (props.isSavedPage ? 'none' : 'block')};

  @media screen and (max-width: ${devices.tablet}) {
    display: block;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;

  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  line-height: 1.4;

  @media screen and (max-width: ${devices.mobile}) {
    font-size: 14px;
  }
`

export const ChannelName = styled.p`
  font-size: 14px;
  margin: 8px 0 4px 0;

  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};

  @media screen and (max-width: ${devices.tablet}) {
    display: inline;
    &::after {
      content: ' • ';
      margin: 0 4px;
    }
  }
`

export const VideoMeta = styled.p`
  font-size: 13px;

  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  margin: 0;

  @media screen and (max-width: ${devices.tablet}) {
    display: inline;
  }
`
