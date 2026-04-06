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
} from './styledComponents'

const SavedVideos = () => {
  const {savedVideos} = useContext(NxtWatchContext)

  if (!savedVideos || savedVideos.length === 0) {
    return (
      <Layout>
        <NoSavedVideosContainer>
          <FailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="failure view"
          />
          <NoSavedVideosHeading>No saved videos found</NoSavedVideosHeading>
          <NoSavedVideosText>
            You can save videos while watching them
          </NoSavedVideosText>
        </NoSavedVideosContainer>
      </Layout>
    )
  }

  return (
    <Layout>
      <SavedVideosContainer>
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
