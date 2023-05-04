import { BoxContent, Wrapper } from './styles.jsx'

export const BackgroundPage = ({ children, style, media }) => {
  return (
    <Wrapper style={style} media={media}>
      <BoxContent>{children}</BoxContent>
    </Wrapper>

    // backgroundImage: `url(/static/img/ongoing-back.png)`,
  )
}
