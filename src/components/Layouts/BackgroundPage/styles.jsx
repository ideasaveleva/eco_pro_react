import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: url('/static/img/mask-group.png');

  @media (max-width: 570px) {
    background-image: url('/static/img/mask-group-medium.png');
  }
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