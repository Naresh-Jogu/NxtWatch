import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
`

export const SavedVideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;

  flex-wrap: wrap;
`

export const NoSavedVideosContainer = styled.div`
  height: 80vh;

  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin-bottom: 8px;
`

export const NoSavedVideosText = styled.p`
  font-size: 16px;
  color: #64748b;
`

export const FailureImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`

export const SavedVideosHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`
