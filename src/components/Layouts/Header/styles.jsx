import styled from 'styled-components'

export const HeaderBox = styled.header`
  z-index: 1;
  margin-bottom: 40px;

  @media (max-width: 992px) {
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  @media (max-width: 767px) {
    padding: 10px 0;
  }
`

export const ContainerIcon = styled.div`
	height: 125px;

  @media (max-width: 992px) {
    height: 83px;
  }
  @media (max-width: 767px) {
    height: 53px;
  }
`
export const Icon = styled.img`
	height: 100%;
`

export const ContainerCall = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`

export const Image = styled.img`
  padding: 5px;
  background-size: auto;
  height: 100%;
  cursor: pointer;
	margin-left: 24px;
`

export const ImageNav = styled.img`
  padding: 5px;
  height: 100%;
  cursor: pointer;
  z-index: 3;
`
