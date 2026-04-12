import {useContext} from 'react'

import NxtWatchContext from '../../context/NxtWatchContext'
import VideoItem from '../VideoItem'
import Layout from '../Layout'

import {
  SavedVideosContainer,
  SavedVideosList,
  NoSavedVideosContainer,
  NoSavedVideosHeading,
  NoSavedVideosText,
  FailureImage,
  SavedVideosHeading,
} from './styledComponents'

const SavedVideos = () => {
  const {savedVideos, isDarkTheme} = useContext(NxtWatchContext)

  if (!savedVideos || savedVideos.length === 0) {
    return (
      <Layout>
        <NoSavedVideosContainer isDarkTheme={isDarkTheme}>
          <FailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />

          <NoSavedVideosHeading isDarkTheme={isDarkTheme}>
            No saved videos found
          </NoSavedVideosHeading>

          <NoSavedVideosText isDarkTheme={isDarkTheme}>
            You can save videos while watching them
          </NoSavedVideosText>
        </NoSavedVideosContainer>
      </Layout>
    )
  }

  return (
    <Layout>
      <SavedVideosContainer isDarkTheme={isDarkTheme}>
        <SavedVideosHeading isDarkTheme={isDarkTheme}>
          Saved Videos
        </SavedVideosHeading>
        <SavedVideosList>
          {savedVideos.map(video => (
            <VideoItem key={video.id} video={video} isSavedPage />
          ))}
        </SavedVideosList>
      </SavedVideosContainer>
    </Layout>
  )
}

export default SavedVideos
