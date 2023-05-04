import styled from 'styled-components'

export const Wrapper = styled.nav`
  text-align: center;
`

export const GreenBox = styled.article`
  padding: 60px 0 76px;
  background: #5da104;
  background-image: url('static/img/green-list.png');

  @media (max-width: 992px) {
    padding: 50px 0;
  }
  @media (max-width: 767px) {
    padding: 30px 0;
  }
`

export const Title = styled.h1`
  color: #fff;
  font-family: 'Days One';
  font-size: 60px;

  @media (max-width: 992px) {
    font-size: 32px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`

export const Image = styled.img`
  max-height: 120px;

  @media (max-width: 992px) {
    max-height: 58px;
  }
  @media (max-width: 767px) {
    max-height: 32px;
  }
`

export const BoxHomeIcons = styled.div`
  margin: 55px auto;
  column-gap: 40px;
  background-color: #fff;
  align-items: center;
  display: flex;
  justify-content: space-between;
  justify-content: space-between;
  padding: 30px;

  @media (max-width: 992px) {
    max-width: 100%;
    padding: 40px 0px;
    justify-content: center;
    margin: 40px auto;
    column-gap: 30px;
  }
  @media (max-width: 767px) {
    margin: 20px auto;
    column-gap: 10px;
    padding: 20px 0;
  }
`