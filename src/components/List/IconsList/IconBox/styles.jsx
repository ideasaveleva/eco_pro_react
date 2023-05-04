import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h3`
  font-family: 'Steppe', sans-serif;
  font-weight: 400;
  font-size: 10px;
  margin-top: 12px;
  white-space: nowrap;

  @media (max-width: 992px) {
    margin-top: 8px;
  }
  @media (max-width: 767px) {
  }
`
export const Image = styled.img`
  /* width: 100%; */
  max-width: 60px;
  max-height: 60px;

  @media (max-width: 992px) {
    max-width: 43px;
    max-height: 42px;
  }
  @media (max-width: 767px) {
  }
`
