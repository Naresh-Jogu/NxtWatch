import {useState} from 'react'
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'

import {
  LoginContainer,
  LoginCard,
  LoginForm,
  Label,
  Input,
  LoginButton,
  ErrorMessage,
  Logo,
  CheckboxContainer,
  CheckboxLabel,
} from './styledComponents'

const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()

    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'

    const oprions = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const resposnse = await fetch(url, oprions)

    const data = await resposnse.json()

    if (resposnse.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      setErrorMsg(data.error_msg)
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <LoginContainer>
      <LoginCard>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <LoginForm onSubmit={handleSubmit}>
          <Label htmlFor="username">USERNAME</Label>
          <Input
            value={username}
            id="username"
            type="text"
            placeholder="USERNAME"
            onChange={e => setUserName(e.target.value)}
          />

          <Label htmlFor="password">PASSWORD</Label>
          <Input
            value={password}
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="PASSWORD"
            onChange={e => setPassword(e.target.value)}
          />
          <CheckboxContainer>
            <input
              id="showPassword"
              type="checkbox"
              onChange={toggleShowPassword}
            />
            <CheckboxLabel htmlFor="showPassword">Show Password</CheckboxLabel>
          </CheckboxContainer>

          <LoginButton type="submit">Login</LoginButton>
          <ErrorMessage>{errorMsg}</ErrorMessage>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  )
}

export default Login
