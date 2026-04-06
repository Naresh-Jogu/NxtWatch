import {Switch, Route} from 'react-router-dom'
import {useState} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import GamingItemDetails from './components/GamingItemDetails'
import NxtWatchContext from './context/NxtWatchContext'
import SavedVideos from './components/SavedVideos'

import './App.css'

// Replace your code here
const App = () => {
  const [savedVideos, setSavedVideos] = useState([])

  const addOrRemoveVideo = video => {
    setSavedVideos(prevVideos => {
      const isAlreadySaved = prevVideos.find(each => each.id === video.id)

      if (isAlreadySaved) {
        return prevVideos.filter(each => each.id !== video.id)
      }

      return [...prevVideos, video]
    })
  }

  return (
    <NxtWatchContext.Provider value={{savedVideos, addOrRemoveVideo}}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/gaming" component={Gaming} />
        <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <ProtectedRoute
          exact
          path="/gaming/:id"
          component={GamingItemDetails}
        />
        <Route component={NotFound} />
      </Switch>
    </NxtWatchContext.Provider>
  )
}

export default App
