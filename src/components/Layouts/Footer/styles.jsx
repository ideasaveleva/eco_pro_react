import styled from 'styled-components'

export const Wrapper = styled.footer`
  background: #09570c;
  color: #ffffff;
  height: 370px;
  font-size: 20px;
  line-height: 25px;
  padding: 97px 0;
  line-height: 40px;
  /* margin-top: 70px; */

  @media (max-width: 992px) {
    line-height: 20px;
    padding: 73px 0 63px;
    /* margin-top: 50px; */
  }
  @media (max-width: 767px) {
    line-height: 16px;
    padding: 83px 0 63px;
    /* margin-top: 40px; */
  }
`

export const FooterBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 992px) {
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    flex-direction: row-reverse;
    align-items: start;
  }
`

export const AboutContainer = styled.main`
  max-width: 400px;

  @media (max-width: 767px) {
    max-width: 272px;
  }
`

export const Link = styled.a`
  color: white;
  font-size: 20px;
	white-space: nowrap;

  @media (max-width: 992px) {
    font-size: 16px;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 28px;
	margin: 20px 0;

  @media (max-width: 992px) {
    gap: 10px;
    justify-content: normal;
  }
`

export const NavIcon = styled.img`
  height: 50px;

  @media (max-width: 992px) {
    height: 36px;
  }
`

export const ContainerIcon = styled.div`
  height: 125px;

  @media (max-width: 992px) {
    height: 178px;
  }
  @media (max-width: 767px) {
    height: 88px;
  }
`

export const Icon = styled.img`
  height: 100%;
`

export const TextLinkBox = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 100px;

  @media (max-width: 992px) {
    display: block;
  }
`