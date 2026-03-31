import {Switch, Route} from 'react-router-dom'
import {useState} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      <Switch>
        <Route exact path="/login" component={Login} />

        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/gaming" component={Gaming} />
        <ProtectedRoute exact path="/SavedVideos" component={SavedVideos} />

        <Route component={NotFound} />
      </Switch>
    </ThemeContext.Provider>
  )
}

export default App
