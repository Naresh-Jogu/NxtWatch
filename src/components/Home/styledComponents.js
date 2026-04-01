import styled from 'styled-components'

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  list-style-type: none;
`

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
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
