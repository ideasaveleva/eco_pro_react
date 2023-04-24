import { Wrapper, BoxContent, } from './styles.jsx'

export const BackgroundPage = ({ children, style }) => {
	return (
    <Wrapper style={style}>
      <BoxContent>{children}</BoxContent>
    </Wrapper>
  )}
