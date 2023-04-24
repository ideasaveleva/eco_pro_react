import styled from 'styled-components'

export const Wrapper = styled.div`
  /* min-height: 800px; */
`
export const BoxContent = styled.div`
  padding-bottom: 100px;

  @media (max-width: 992px) {
    padding-bottom: 50px;
  }
  @media (max-width: 767px) {
    padding-bottom: 40px;
  }
`