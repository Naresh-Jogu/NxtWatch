import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`

export const VideoDetailContainer = styled.div`
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`

export const PlayerWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
  max-height: 450px;

  @media screen and (min-width: 1200px) {
    max-width: 800px;
    max-height: 450px;
  }

  @media screen and (max-width: 768px) {
    max-height: 300px;
  }

  @media screen and (max-width: 576px) {
    max-height: 220px;
  }
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 500;
  margin: 20px 0;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const VideoStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const VideoStatusText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  display: flex;
  align-items: center;
`

export const VideoDot = styled.span`
  margin: 0 8px;
  font-weight: bold;
`

export const HrLine = styled.hr`
  border: 1px solid ${props => (props.isDarkTheme ? '#313131' : '#cbd5e1')};
  margin: 20px 0;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
`

export const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 500;
  margin: 0;
`

export const Subscribers = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  margin-top: 4px;
`

export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
  line-height: 1.6;
  margin-top: 25px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const ReactionButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const ReactionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  cursor: pointer;

  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  font-size: ${props => (props.active ? '18px' : '14px')};

  color: ${props => {
    if (props.active) {
      return '#2563eb'
    }
    if (props.isDarkTheme) {
      return '#94a3b8'
    }
    return '#64748b'
  }};
`

export const FailureContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin-bottom: 10px;
`

export const RetryButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
`

export const SaveButtonCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SaveVideoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
`
