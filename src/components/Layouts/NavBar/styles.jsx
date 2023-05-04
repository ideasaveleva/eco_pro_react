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
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 30px;

  @media (max-width: 992px) {
    font-size: 24px;
    padding: 50px 0;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    gap: 10px;
  }
`
export const Image = styled.img`
  max-width: 20px;

  @media (max-width: 992px) {
    
  }
  @media (max-width: 767px) {
    max-width: 18px;
  }
`
export const WrapLinkList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
