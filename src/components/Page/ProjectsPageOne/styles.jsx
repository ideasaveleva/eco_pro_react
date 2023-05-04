import styled from 'styled-components'

export const Wrapper = styled.article`
  /* padding-bottom: 70px; */
`
export const Title = styled.h1`
  padding: 72px 0 45px;
  font-family: 'Days One';
  font-size: 60px;
  color: #5da104;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 992px) {
    font-size: 32px;
    padding: 50px 0 25px;
  }
  @media (max-width: 767px) {
    font-size: 22px;
    padding: 30px 0 20px;
  }
`

export const TextBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 30px;
  margin-bottom: 88px;

  @media (max-width: 992px) {
    margin-bottom: 25px;
    row-gap: 20px;
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    row-gap: 16px;
  }
`

export const TextIconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 520px;
  font-size: 20px;
  line-height: 25px;

  @media (max-width: 992px) {
    gap: 10px;
    font-size: 12px;
    line-height: 18px;
    width: 330px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const Icon = styled.img`
  width: 30px;

  @media (max-width: 992px) {
  }
  @media (max-width: 767px) {
    width: 20px;
  }
`

export const LogoBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 992px) {
    margin-bottom: 25px;
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 41px;
  }
`

export const Logo = styled.img`
  height: 150px;
  display: block;

  @media (max-width: 992px) {
    height: 70px;
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    height: 88px;
  }
`

export const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding-top: 60px;

  @media (max-width: 992px) {
    padding-top: 30px;
    gap: 20px;
  }
  @media (max-width: 767px) {
    padding-top: 41px;
  }
`

export const Image = styled.img`
  border-radius: 15px;
  width: 100%;

  @media (max-width: 992px) {

  }
  @media (max-width: 767px) {
  }
`

export const ImageMedia = styled.img`
  border-radius: 15px;
  width: 100%;
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
  @media (max-width: 767px) {
  }
`

export const ImageJobCenter = styled.div`
  border-radius: 15px;
  width: 100%;

  @media (max-width: 992px) {
    display: none;
  }
  @media (max-width: 767px) {
  }
`

export const BtnBox = styled.div`
  text-align: center;
  display: none;

  @media (max-width: 992px) {
    margin-top: 30px;
    display: none;
  }
  @media (max-width: 767px) {
    margin-top: 20px;
    display: block;
  }
`

export const BtnMedia = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
  @media (max-width: 767px) {
  }
`

export const JobLogoBox = styled.div`
  text-align: center;

  @media (max-width: 992px) {
  }
  @media (max-width: 767px) {
    display: none;
  }
`

export const LogoJob = styled.img`
  height: 240px;

  @media (max-width: 992px) {
    height: 82px;
    margin-bottom: 12px;
  }
  @media (max-width: 767px) {
  }
`

export const JobText = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media (max-width: 992px) {
    justify-content: space-evenly;
    flex-direction: inherit;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

export const Text = styled.p`
  max-width: 446px;

  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px;
    max-width: 400px;
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`

export const MainBox = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`

export const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 27px;
  padding: 37px 0;

  @media (max-width: 992px) {
    padding: 25px 0;
  }
  @media (max-width: 767px) {
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
  }
`

export const LogoMain = styled.img`
  width: 150px;
  /* margin-top: 40px; */

  @media (max-width: 992px) {
    flex-direction: column;
    width: 125px;
  }
  @media (max-width: 767px) {
		margin-top: 0;
  }
`
