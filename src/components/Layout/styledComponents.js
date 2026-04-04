import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const BodyContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`

export const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 0px;
`

export const SideBarWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
