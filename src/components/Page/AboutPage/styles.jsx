import styled from 'styled-components'

export const MainBlock = styled.article`
  background-color: #455694;
  color: white;
  padding-top: 90px;
  padding-bottom: 70px;
`

export const TextContainer = styled.div`
  width: 650px;
`

export const ImageContainer = styled.div`
  width: 650px;
`

export const AboutBlock = styled.main`
  margin-top: 50px;
`

export const Image = styled.img`
  border-radius: 5%;
  object-fit: cover;
  width: 477px;

  @media (max-width: 992px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`

export const ImageMedia = styled.img`
  border-radius: 5%;
  object-fit: cover;
  display: none;
  overflow: hidden;
  margin-bottom: 25px;
  width: 100%;

  @media (max-width: 767px) {
    display: block;
  }
`

export const ImageMedia1 = styled.img`
  border-radius: 5%;
  object-fit: cover;
  display: none;
  overflow: hidden;
  width: 100%;
  display: none;

  @media (max-width: 992px) {
    display: block;
    width: 300px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`

export const WrapAbout = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  color: #fff;

  @media (max-width: 767px) {
    display: block;
  }
`

export const Title = styled.h1`
  color: #fff;
  font-family: 'Days One';
  font-size: 60px;
  text-transform: uppercase;

  @media (max-width: 992px) {
    font-size: 32px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`

export const TitleThree = styled.h3`
  font-size: 40px;
  margin: 18px 0 50px;

  @media (max-width: 992px) {
    margin: 14px 0 18px;
    font-size: 32px;
    font-weight: 300;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const Text = styled.p`
  font-family: 'Steppe';
  font-size: 20px;
  padding-bottom: 30px;

  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px;
    padding-bottom: 20px;
  }
  @media (max-width: 767px) {
    padding-bottom: 10px;
  }
`

export const TextNew = styled.p`
  display: none;
  font-family: 'Steppe';
  font-size: 20px;
  padding-bottom: 30px;

  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px;
    display: block;
    padding-bottom: 20px;
  }
  @media (max-width: 767px) {
    padding-bottom: 10px;
  }
`

export const TextMedia = styled.p`
  display: block;
  font-family: 'Steppe';
  font-size: 20px;
  padding-bottom: 30px;

  @media (max-width: 992px) {
    display: none;
    font-size: 12px;
    line-height: 18px;
    padding-bottom: 20px;
  }
`
export const TextMediaNew = styled.p`
  margin-top: 15px;
  color: #fff;
  display: none;
  font-family: 'Steppe';
  font-size: 20px;
  padding-bottom: 30px;

  @media (max-width: 992px) {
    display: block;
    font-size: 12px;
    line-height: 18px;
    padding-bottom: 20px;
  }
  @media (max-width: 767px) {
    margin-top: 0px;
  }
`

export const TextQuote = styled.blockquote`
  font-family: 'Days One';
  font-size: 40px;
  color: #09570c;
  margin: 54px 0;

  @media (max-width: 992px) {
    font-size: 24px;
    margin: 0;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    margin: 0;
  }
`

export const TitleTwo = styled.h2`
  font-family: 'Days One';
  font-size: 40px;
  text-transform: uppercase;
  color: #5da104;
  margin-bottom: 30px;
  max-width: 611px;
  min-height: 80px;

  @media (max-width: 992px) {
    font-size: 32px;
    margin-bottom: 25px;
    margin-top: 30px;
    min-height: 0px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`

export const InfoList = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    display: block;
  }
`

export const IconTextBox = styled.div`
  max-width: 611px;
  display: flex;
  gap: 20px;
  font-size: 20px;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    font-size: 12px;
  }
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
`

export const Icon = styled.img`
  height: 30px;

  @media (max-width: 767px) {
    height: 30px;
  }
`

export const WrapTitleBtn = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PhotoContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 46px 0 30px;

  @media (max-width: 992px) {
    padding: 25px 0 0;
  }
  @media (max-width: 767px) {
    padding: 34px 0 0;
  }
`

export const Card = styled.div`
  font-size: 20px;
  padding-bottom: 44px;
  width: 320px;

  @media (max-width: 992px) {
    width: 333px;
    padding-bottom: 25px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 20px;
  }
`

export const ImageCard = styled.img`
  border-radius: 5%;
  object-fit: cover;
  width: 100%;
`

export const TitleCard = styled.h3`
  font-family: 'Days One';
  font-size: 24px;
  color: #5da104;
  margin: 10px 0;

  @media (max-width: 992px) {
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`

export const BtnMediaNone = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
  @media (max-width: 767px) {
    
  }
`
