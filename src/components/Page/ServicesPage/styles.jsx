import styled from 'styled-components'

export const Title = styled.h2`
  font-family: 'Days One';
  font-size: 60px;
  color: #09570c;
  padding: 50px 0;
  white-space: nowrap;

  @media (max-width: 992px) {
    font-size: 32px;
    text-align: center;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    padding: 30px 0;
  }
`

export const InfoBox = styled.main`
  display: flex;
  justify-content: space-between;
  padding-bottom: 70px;

  @media (max-width: 992px) {
    display: block;
    padding-bottom: 0px;
  }
  @media (max-width: 767px) {
    padding-bottom: 0px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 670px;

  @media (max-width: 992px) {
    padding-bottom: 50px;
		max-width: 540px;
		margin: 0 auto;
  }
  @media (max-width: 767px) {
    gap: 14px;
    padding-bottom: 30px;
		max-width: 366px;
  }
`

export const IconTextBox = styled.div`
  width: 323px;
  display: flex;
  column-gap: 30px;

  @media (max-width: 992px) {
    column-gap: 16px;
    max-width: 259px;
  }
  @media (max-width: 767px) {
    column-gap: 10px;
    max-width: 164px;
  }
`

export const Icon = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
`

export const Text = styled.p`
  font-size: 20px;
  line-height: 25px;

  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px;
  }
`

export const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
`

export const TextList = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TextBlockTwo = styled.article`
  /* max-width: 650px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 670px;
`

export const ImageInContainer = styled.div`
  display: block;

  @media (max-width: 992px) {
    display: none;
  }
  
`

export const ImageInMedia = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
  @media (max-width: 767px) {
  }
`

export const ImageMedia = styled.img`
  width: 100%;
  max-height: 400;
`

export const BtnBox = styled.div`
  text-align: center;
  display: none;

  @media (max-width: 992px) {
    margin-top: 40px;
    display: block;
  }
  @media (max-width: 767px) {
    margin-top: 20px 0;
  }
`

export const BtnBoxMedia = styled.div`
  display: block;

  @media (max-width: 992px) {
    display: none;
  }
`

export const TextBlock = styled.p`
  font-size: 20px;
  line-height: 25px;

  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px;
    max-width: 540px;
    /* padding: 50px 0; */
    margin: 50px auto;
  }
  @media (max-width: 767px) {
    /* padding: 30px 0; */
    margin: 30px auto;
    max-width: 366px;
  }
`

export const IconTextBoxBig = styled.div`
  width: 100%;
  display: flex;
  column-gap: 30px;

  @media (max-width: 992px) {
    column-gap: 16px;
    max-width: 259px;
  }
  @media (max-width: 767px) {
    column-gap: 10px;
    max-width: 100%;
  }
`