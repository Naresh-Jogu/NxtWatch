import styled from 'styled-components'

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 0px;
`

export const VideosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style-type: none;
  padding: 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;

  display: flex;
  padding: 16px;
  background-color: white;
  border-bottom: 1px solid #e2e8f0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SearchInput = styled.input`
  width: 300px;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  outline: none;
`

export const SearchButton = styled.button`
  width: 50px;
  border: 1px solid #cbd5e1;
  background: #f1f5f9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`

export const FailureContainer = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
`

export const FailureText = styled.p`
  color: #64748b;
  text-align: center;
  margin-bottom: 20px;
`

export const RetryButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
`
