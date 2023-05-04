import styled from 'styled-components'

export const Wrapper = styled.nav`
  padding: 40px 60px;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  width: 100%;
  overflow: hidden;

  animation: 5s linear 5s infinite;
  @keyframes translate {
    from {
      transform: translate(-1000px);
    }

    to {
      transform: translate(0px);
    }
  }


  @media (max-width: 992px) {
    padding: 50px 0 0;
    column-gap: 9px;
  }
  @media (max-width: 767px) {
    padding: 20px 0 0;
  }
`
