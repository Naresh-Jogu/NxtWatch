import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  /* Mobile adjustment */
  @media screen and (max-width: 576px) {
    height: 180px;
    padding: 15px;
  }
`

export const BannerLeftPart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export const BannerLogo = styled.img`
  width: 120px;
  height: 30px;

  @media screen and (max-width: 576px) {
    width: 100px;
    height: 25px;
  }
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #1e293b;
  margin-top: 20px;
  margin-bottom: 25px;
  line-height: 1.5;

  @media screen and (max-width: 576px) {
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 20px;
  }
`

export const BannerButton = styled.button`
  background: transparent;
  color: #181818;
  border: 1px solid #181818;
  padding: 8px 16px;
  font-family: 'Roboto';
  font-weight: 600;
  cursor: pointer;
  outline: none;
  font-size: 14px;

  @media screen and (max-width: 576px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
