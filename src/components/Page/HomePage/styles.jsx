import styled from 'styled-components'

export const ImageBackground = styled.div`
  background-image: url(static/img/planet.png);
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: right bottom;
  margin-top: 40px;

  @media (max-width: 992px) {
    background-size: 39%;
  }
  @media (max-width: 767px) {
    background-size: 45%;
  }
`
export const Wrapper = styled.main`
  margin: 90px 0;

  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    margin: 50px 0 0;
    display: block;
  }
  @media (max-width: 767px) {
    margin: 30px 0 0;
    /* margin: 110px 0; */
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
  font-size: 60px;

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
	margin: 30px 0 15px;

  @media (max-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
		margin: 10px 0 0;
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
	margin-top: 0;

  @media (max-width: 992px) {
    text-align: start;
    margin-top: 25px;
  }
  @media (max-width: 767px) {
    margin-top: 10px;
  }
`
export const IconBox = styled.div`
  max-width: 626px;
  justify-content: space-between;
  display: flex;
  gap: 34px;
  margin-top: 50px;

  @media (max-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    margin-top: 50px;
    flex-direction: row;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 40px;
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
  max-height: 281px;

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
    max-width: 240px;
  }
`

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 992px) {
    flex-direction: row;
    gap: 60px;
  }
  @media (max-width: 767px) {
    gap: 40px;
    flex-direction: column;
  }
`
export const Image = styled.img`
  width: 100%;
  max-height: 130px;

  @media (max-width: 992px) {
    max-height: 142px;
  }
  @media (max-width: 767px) {
    max-width: 178px;
  }
`
