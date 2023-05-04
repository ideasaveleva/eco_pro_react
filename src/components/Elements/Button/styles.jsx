import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-family: 'Steppe', sans-serif;
  font-size: 20px;
  /* padding: 20px 50px; */
  /* border-radius: 10px; */
  padding: 14px 40px;
  border-radius: 8px;

  background: #5da104;
  color: white;
  border: none;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;

  @media (max-width: 992px) {
    /* padding: 12px 20px; */
  }
  @media (max-width: 767px) {
    font-size: 12px;
    padding: 10px 24px;
  }
`
