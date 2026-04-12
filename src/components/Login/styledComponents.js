import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
`

export const LoginCard = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  padding: 30px;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    padding: 20px;
    box-shadow: none;
  }
`

export const Logo = styled.img`
  width: 150px;
  margin: 0 auto 30px auto;
  display: block;

  @media (max-width: 576px) {
    width: 120px;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-top: 15px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
`

export const Input = styled.input`
  height: 40px;
  margin-top: 6px;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  border: 1px solid ${props => (props.isDarkTheme ? '#475569' : '#cbd5e1')};
`

export const LoginButton = styled.button`
  margin-top: 25px;
  height: 42px;
  background-color: #3b82f6;
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 576px) {
    height: 40px;
  }
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin-top: 10px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
export const CheckboxLabel = styled.label`
  font-size: 14px;
  margin-left: 6px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
`
