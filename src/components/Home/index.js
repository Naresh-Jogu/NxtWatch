import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FiSearch} from 'react-icons/fi'
import {useState, useEffect, useCallback, useContext} from 'react'

import Layout from '../Layout'
import SubscriptionBanner from '../SubscriptionBanner'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ContentContainer,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
  SearchFailureHeading,
} from './styledComponents'

import VideoItem from '../VideoItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Home = () => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  const [videosList, setVideosList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [appliedSearch, setAppliedSearch] = useState('')
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [showBanner, setShowBanner] = useState(true)

  const getVideos = useCallback(async () => {
    setApiStatus(apiStatusConstants.loading)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${appliedSearch}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()

      const updateData = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))
      setVideosList(updateData)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }, [appliedSearch])

  useEffect(() => {
    getVideos()
  }, [getVideos])

  const onClickSearchBar = () => {
    setAppliedSearch(searchInput)
  }

  const renderSearchBar = () => (
    <SearchContainer isDarkTheme={isDarkTheme}>
      <SearchInput
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        isDarkTheme={isDarkTheme}
      />

      <SearchButton
        type="button"
        data-testid="searchButton"
        onClick={onClickSearchBar}
        isDarkTheme={isDarkTheme}
      >
        <FiSearch />
      </SearchButton>
    </SearchContainer>
  )

  const renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} />
    </LoaderContainer>
  )

  const renderVideos = () => {
    if (videosList.length === 0) {
      return (
        <FailureContainer isDarkTheme={isDarkTheme}>
          <FailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <SearchFailureHeading>No Search results found</SearchFailureHeading>
          <FailureText>
            Try different key words or remove search filter
          </FailureText>
        </FailureContainer>
      )
    }

    return (
      <VideosContainer isDarkTheme={isDarkTheme}>
        {videosList.map(video => (
          <VideoItem key={video.id} video={video} />
        ))}
      </VideosContainer>
    )
  }

  const renderFailureView = () => (
    <FailureContainer isDarkTheme={isDarkTheme}>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>

      <FailureText isDarkTheme={isDarkTheme}>
        We are having some trouble completing your request. Please try again.
      </FailureText>

      <RetryButton type="button" onClick={getVideos}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  const renderContent = () => {
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderVideos()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  const onCloseBanner = () => {
    setShowBanner(false)
  }

  return (
    <Layout>
      <ContentContainer>
        {showBanner && (
          <SubscriptionBanner
            onCloseBanner={onCloseBanner}
            showBanner={showBanner}
          />
        )}

        {renderSearchBar()}
        {renderContent()}
      </ContentContainer>
    </Layout>
  )
}
export default Home
