import styled from 'styled-components'

export const Wrapper = styled.aside`
  text-align: center;
`
export const Title = styled.h1`
  white-space: nowrap;
  color: #5da104;
  font-family: 'Days One';
  font-size: 60px;
  line-height: 60px;
  text-transform: uppercase;
	margin-bottom: 50px;

  @media (max-width: 992px) {
    font-size: 36px;
    line-height: 40px;
		margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 24px;
		margin-bottom: 20px;
  }
`
