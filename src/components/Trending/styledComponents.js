import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  min-height: 100vh;
  width: 100%;
`

export const TrendingHeader = styled.div`
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

export const VideosList = styled.ul`
  list-style: none;
  padding: 30px;
  margin: 0;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  /* This makes the list fill the space beautifully instead of capping at 600px */
  width: 100%;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 15px;
  padding: 40px 20px;
`

export const RetryButton = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    transform: scale(0.98);
  }
`
