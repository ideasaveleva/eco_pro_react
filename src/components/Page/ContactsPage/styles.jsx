import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
	
  @media (max-width: 992px) {
  }
  @media (max-width: 767px) {
    display: block;
  }
`

export const LinkBox = styled.nav`
  font-size: 40px;

  @media (max-width: 992px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`

export const Link = styled.a`
  color: white;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    margin-bottom: 20px;
  }
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
  @media (max-width: 410px) {
    margin-bottom: 15px;
  }
`

export const Title = styled.h1`
  font-family: 'Days One';
  text-transform: uppercase;
  color: #ffffff;
  font-size: 60px;

  @media (max-width: 992px) {
    font-size: 36px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 50px;
  margin: 80px 0 70px;

  @media (max-width: 992px) {
    font-size: 36px;
    margin: 30px 0 40px;
    gap: 20px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    margin: 20px 0 30px;
  }
`

export const NavIcon = styled.img`
  height: 88px;

  @media (max-width: 992px) {
    height: 40px;
  }
`
