import Cookies from 'js-cookie'
import {TailSpin} from 'react-loader-spinner'
import {FiSearch} from 'react-icons/fi'
import {useState, useEffect} from 'react'
import Layout from '../Layout'
import {
  ContentContainer,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from './styledComponents'
import VideoItem from '../VideoItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Home = () => {
  const [videosList, setVideosList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getVideos = async () => {
    setApiStatus(apiStatusConstants.loading)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)

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
  }

  useEffect(() => {
    getVideos()
  }, [])

  const renderSearchBar = () => (
    <SearchContainer>
      <SearchInput
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <SearchButton
        type="button"
        data-testid="searchButton"
        onClick={getVideos}
      >
        <FiSearch />
      </SearchButton>
    </SearchContainer>
  )

  return (
    <Layout>
      <ContentContainer>
        {renderSearchBar()}
        <VideosContainer>
          {videosList.map(video => (
            <VideoItem key={video.id} video={video} />
          ))}
        </VideosContainer>
      </ContentContainer>
    </Layout>
  )
}
export default Home
