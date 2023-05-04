import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  color: #5da104;
  font-family: 'Days One';
  max-width: 1112px;
  margin: 87px 0 40px;

  @media (max-width: 992px) {
    font-size: 32px;
    margin: 30px 0 25px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    margin: 20px 0 15px;
  }
`

export const Title2 = styled.h2`
  font-family: 'Days One';
  font-size: 40px;
  color: #09570c;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    font-size: 24px;
    margin-bottom: 25px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`

export const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;

  @media (max-width: 992px) {
    display: block;
    margin-bottom: 0;
  }
  @media (max-width: 767px) {
  }
`

export const MiniWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  max-width: 636px;

  @media (max-width: 992px) {
    gap: 25px 0;
    max-width: 100%;
    margin-bottom: 25px;
  }
  @media (max-width: 767px) {
    gap: 10px 0;
    margin-bottom: 10px;
  }
`

export const TextBox = styled.p`
  /* max-width: 600px; */
  font-size: 20px;
  /* line-height: 25px; */
  color: #000;
  font-family: 'Days One';
  /* padding: 25px 0; */
	font-weight: 300;

  @media (max-width: 992px) {
    max-width: 100%;
    font-size: 16px;
    /* line-height: 25px; */
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`

export const FirstWord = styled.span`
  color: #5da104;
  font-size: 25px;
  font-family: 'Days One';
  margin-right: 10px;

  @media (max-width: 992px) {
    font-size: 20px;
    margin-right: 5px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding: 60px 0;

  @media (max-width: 992px) {
    padding: 50px 0;
    gap: 20px;
  }
  @media (max-width: 767px) {
    padding: 20px 0;
  }
`

export const Image = styled.img`
  border-radius: 15px;
  width: 48%;

  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 767px) {
  }
`      
