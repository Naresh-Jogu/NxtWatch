import {createContext} from 'react'

const NxtWatchContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  addOrRemoveVideo: () => {},
})

export default NxtWatchContext
