import {createContext} from 'react'

const NxtWatchContext = createContext({
  savedVideos: [],
  addOrRemoveVideo: () => {},
})

export default NxtWatchContext
