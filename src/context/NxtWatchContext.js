import {createContext} from 'react'

const NxtWatchContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideosList: [],
  addOrRemoveVideo: () => {},
})

export default NxtWatchContext
