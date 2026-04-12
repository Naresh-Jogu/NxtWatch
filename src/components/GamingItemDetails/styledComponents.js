import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`

export const GamingDetailsContainer = styled.div`
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 80vh;

  @media screen and (min-width: 768px) {
    padding: 30px 40px;
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

export const GameTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 500;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const GameStats = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  font-weight: 500;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const GameDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};
  line-height: 1.6;
  border-top: 1px solid ${props => (props.isDarkTheme ? '#313131' : '#cbd5e1')};
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

/* Failure View */

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  min-height: 80vh;

  h1 {
    font-size: 22px;
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
    margin: 20px 0 10px;
  }

  p {
    color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
    margin-bottom: 20px;
  }
`

export const FailureImage = styled.img`
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 25px;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
`
