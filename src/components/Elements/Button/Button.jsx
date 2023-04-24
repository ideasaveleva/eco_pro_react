import { ButtonContainer } from './styles.jsx'

export const Button = ({ children, style }) => {
  return (
    <div>
      <ButtonContainer style={style}> {children}</ButtonContainer>
    </div>
  )
}
