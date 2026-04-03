import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const GamingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: #ebebeb; /* Fixed the spelling of background-color */
  border-radius: 8px;

  @media (min-width: 768px) {
    font-size: 2rem;
    padding: 25px;
  }
`

export const GamingVideosList = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const GamingVideoItem = styled.li`
  display: flex;
  flex-direction: column;
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const VideoTitle = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
`

export const Views = styled.p`
  color: #909090;
  font-size: 14px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`
