import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  width: 100%;
  padding: 24px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  color: #1e293b;
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
