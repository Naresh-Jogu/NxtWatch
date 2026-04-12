import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  width: 100%;
`

export const GamingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.5rem;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
  border-radius: 8px;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    padding: 25px;
  }
`
export const GamingTitle = styled.h1`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const GamingIconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#d7dfe9')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0000;

  @media screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`

export const GamingHeaderText = styled.h1`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const GamingVideosList = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 15px;
  }
`

export const GamingVideoItem = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 12px;
  object-fit: cover;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 4px;
  line-height: 1.4;
`

export const Views = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  font-size: 14px;
  margin: 0;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
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

export const FailureText = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  text-align: center;
  margin-bottom: 20px;
`

export const RetryButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
`
