import {useState, useContext} from 'react'
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
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
  const {isDarkTheme} = useContext(NxtWatchContext)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()

    setLoading(true)

    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const resposnse = await fetch(url, options)

    const data = await resposnse.json()

    if (resposnse.ok) {
      setLoading(false)
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      setLoading(false)
      setErrorMsg(data.error_msg)
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <LoginContainer isDarkTheme={isDarkTheme}>
      <LoginCard isDarkTheme={isDarkTheme}>
        <Logo
          src={
            isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
          alt="website logo"
        />

        <LoginForm onSubmit={handleSubmit}>
          <Label htmlFor="username" isDarkTheme={isDarkTheme}>
            USERNAME
          </Label>

          <Input
            value={username}
            id="username"
            type="text"
            placeholder="USERNAME"
            onChange={e => setUserName(e.target.value)}
            isDarkTheme={isDarkTheme}
          />

          <Label htmlFor="password" isDarkTheme={isDarkTheme}>
            PASSWORD
          </Label>

          <Input
            value={password}
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="PASSWORD"
            onChange={e => setPassword(e.target.value)}
            isDarkTheme={isDarkTheme}
          />

          <CheckboxContainer>
            <input
              id="showPassword"
              type="checkbox"
              onChange={toggleShowPassword}
            />
            <CheckboxLabel htmlFor="showPassword" isDarkTheme={isDarkTheme}>
              Show Password
            </CheckboxLabel>
          </CheckboxContainer>

          <LoginButton type="submit" disabled={loading}>
            {loading ? 'Logging...' : 'Login'}
          </LoginButton>

          <ErrorMessage>{errorMsg}</ErrorMessage>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  )
}

export default Login
