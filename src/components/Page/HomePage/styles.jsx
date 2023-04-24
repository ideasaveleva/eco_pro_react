import styled from 'styled-components'

export const ImageBackground = styled.div`
  background-image: url(static/img/planet.png);
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: right;
  margin-top: 40px;
`
export const Wrapper = styled.main`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    display: block;
  }
  @media (max-width: 767px) {
  }
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const Title = styled.h1`
  font-family: 'Days One';
  white-space: nowrap;
  @media (max-width: 992px) {
    font-size: 32px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`

export const TitleTwo = styled.h2`
  color: #5da104;
  font-family: 'Days One';
  font-size: 40px;
  @media (max-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const Text = styled.p`
  font-size: 20px;
  line-height: 30px;
  max-width: 700px;
  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 18px;
  }
`

export const BtnIconBox = styled.div`
  text-align: end;
  @media (max-width: 992px) {
    text-align: start;
  }
  @media (max-width: 767px) {
  }
`
export const IconBox = styled.div`
	max-width: 626px;
  justify-content: space-between;
  display: flex;
	gap: 34px;

  @media (max-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

export const BlockContainerImage = styled.div`
  @media (max-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 767px) {
  }
`

export const ImageXl = styled.img`
  width: 100%;
  max-height: 100%;
  @media (max-width: 992px) {
    display: none;
  }
  @media (max-width: 767px) {
  }
`
export const ImageL = styled.img`
  max-width: 100%;
  height: auto;
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
  @media (max-width: 767px) {
  }
`

export const ImageBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
  @media (max-width: 992px) {
    display: flex;
  }
`
export const Image = styled.img`
  width: 100%;
  height: auto;
`
