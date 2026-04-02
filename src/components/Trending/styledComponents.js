import styled from 'styled-components'

export const TrendingContainer = styled.div`
  padding: 20px;
`

export const TrendingHeader = styled.div`
  margin-bottom: 20px;
`

export const VideosList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`

export const FailureContainer = styled.div`
  text-align: center;
`

export const RetryButton = styled.button`
  background: #3b82f6;
  border: none;
  color: white;
  padding: 10px 16px;
  cursor: pointer;
`
