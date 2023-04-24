import styled from 'styled-components'

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 97px 0;
  gap: 55px;

  @media (max-width: 992px) {
    margin: 50px 0;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin: 30px 0;
    gap: 20px;
  }
`

export const Icon = styled.img`
  height: 110px;

  @media (max-width: 992px) {
    height: 50px;
  }
  @media (max-width: 767px) {
    height: 99px;
  }
`

export const Title = styled.h3`
  font-family: 'Days One';
  font-size: 40px;
  line-height: 45px;
  color: #09570c;
  margin-bottom: 43px;
  max-width: 1255px;

  @media (max-width: 992px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 20px;
  }
  @media (max-width: 767px) {
  }
`

export const FeedbackBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
  }
`

export const ImageXL = styled.img`
  border-radius: 15px;
  width: 100%;
  object-fit: cover;

  @media (max-width: 992px) {
    margin-bottom: 20px;
  }
  @media (max-width: 767px) {
  }
`

export const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
  max-width: 653px;

  @media (max-width: 992px) {
    max-width: 686px;
  }
  @media (max-width: 767px) {
    max-width: 697px;
  }
`

export const ImageBox = styled.div`
  @media (max-width: 992px) {
    margin-bottom: 20px;
  }
`

export const Line = styled.div`
  border-bottom: 5px solid #09570c;
  max-width: 950px;
  margin: 60px auto 40px;

  @media (max-width: 992px) {
    margin: 48px auto;
  }
  @media (max-width: 767px) {
    margin: 20px auto;
  }
`

export const PhotosBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: 992px) {
    column-gap: 0;
    row-gap: 30px;
  }
  @media (max-width: 767px) {
    row-gap: 20px;
    column-gap: 0;
  }
`

export const PostersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 75px;
  column-gap: 30px;
  row-gap: 35px;

  @media (max-width: 992px) {
    margin-top: 30px;
    column-gap: 50px;
    row-gap: 25px;
  }
  @media (max-width: 767px) {
    margin-top: 46px;
    row-gap: 30px;
    column-gap: 0;
  }
`

export const ImagePoster = styled.img`
  border-radius: 15px;
  width: calc(100% - 100px);
  object-fit: cover;
  max-width: 422px;

  @media (max-width: 992px) {
    max-width: 318px;
  }
  @media (max-width: 767px) {
    max-width: 501px;
  }
`
export const ContainerFeedbackBtn = styled.div`
  min-width: 305px;
  max-width: 500px;
  width: calc(100% - 100px);
`
