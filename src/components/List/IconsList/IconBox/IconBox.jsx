import { Wrapper, Title, Image } from './styles.jsx'

export const IconBox = ({ nameImg, src }) => {
  return (
    <Wrapper>
        <Image src={src} />
        <Title>{nameImg}</Title>
    </Wrapper>
  )
}
