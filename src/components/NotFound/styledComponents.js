import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const NotFoundImage = styled.img`
  width: 300px;
  margin-bottom: 24px;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-size: 24px;
  margin-bottom: 12px;
`

export const NotFoundText = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  font-size: 16px;
  text-align: center;
  max-width: 400px;
`
