import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: 'hidden';
`
export const LinkBox = styled.nav`
  background: rgba(9, 87, 12, 0.9);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  padding: 157px 0 165px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-size: 60px;

  @media (max-width: 992px) {
    font-size: 24px;
    gap: 30px;
    padding: 51px 0 52px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    gap: 10px;
    padding: 47px 0;
  }
`
export const Image = styled.img`
  width: 59px;
	
  @media (max-width: 992px) {
    width: 30px;
  }
  @media (max-width: 767px) {
    width: 18px;
  }
`
export const WrapLinkList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
