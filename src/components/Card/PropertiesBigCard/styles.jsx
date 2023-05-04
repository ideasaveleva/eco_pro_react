import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    display: block;
		width: 100%;
  }
`

export const InfoBox = styled.div`
  max-width: 650px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`

export const Text = styled.p`
  margin: 10px 0;
  font-weight: 300;
  line-height: 25px;
  font-size: 20px;
  /* max-width: 600px; */

  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px;
    max-width: 450px;
  }
  @media (max-width: 767px) {
    max-width: 266px;
  }
`

export const ImageContainer = styled.div`
  @media (max-width: 992px) {
    margin-top: 50px;
  }
  @media (max-width: 767px) {
    margin-top: 30px;
  }
`

export const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
`

export const Title = styled.h1`
  max-width: 447px;
  margin-bottom: 34px;
  font-size: 60px;

  @media (max-width: 992px) {
    max-width: 270px;
    font-size: 36px;
    margin-bottom: 15px;
  }
  @media (max-width: 767px) {
    max-width: 178px;
    font-size: 24px;
    margin-bottom: 0px;
  }
`

export const Icon = styled.img`
  max-height: 142px;
  margin-left: 20px;

  @media (max-width: 992px) {
    max-height: 82px;
  }
  @media (max-width: 767px) {
		display: none;
  }
`

export const TextIcon = styled.p`
  font-weight: 300;
  line-height: 25px;
  font-size: 20px;
  max-width: 600px;

  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px;
    max-width: 410px;
    padding-top: 24px;
  }
  @media (max-width: 767px) {
    /* max-width: 555px; */
    padding-top: 0;
  }
`
