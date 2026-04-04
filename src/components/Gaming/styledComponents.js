import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  min-height: 100vh;
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

export const GamingIconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #d7dfe9;
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
  font-size: 24px;
  color: #1e293b;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const GamingVideosList = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;
  display: grid;
  /* Increasing columns to 4 or 5 on desktop naturally reduces individual item height */
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
    transform: translateY(-5px); /* Subtle lift on hover */
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4; /* Gaming thumbnails are usually portrait, not landscape */
  border-radius: 12px;
  object-fit: cover;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: #1e293b; /* Changed from white to dark for visibility */
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 4px;
  line-height: 1.4;
`

export const Views = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 14px;
  margin: 0;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
