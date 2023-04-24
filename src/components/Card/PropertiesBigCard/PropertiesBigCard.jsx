import { Button } from '../../Elements/Button/Button.jsx'
import {
  Icon,
  Image,
  ImageContainer,
  InfoBox,
  Text,
  Title,
  Wrapper,
} from './styles.jsx'

export const PropertiesBigCard = ({
  style,
  title,
  firstParagraph,
  secondParagraph,
  textBtnOne,
  textBtnTwo,
  src,
  btnStyle,
  titleStyle,
  icon,
  srcIcon,
  styleBox,
}) => {
  return (
    <Wrapper style={style}>
      <InfoBox style={styleBox}>
        <Title style={titleStyle}>{title}</Title>

        {firstParagraph && icon ? (
          <div style={{ display: 'flex' }}>
            <Text>{firstParagraph}</Text>
            <Icon src={srcIcon} />
          </div>
        ) : (
          <Text>{firstParagraph}</Text>
        )}

        {secondParagraph && <Text>{secondParagraph}</Text>}

        {textBtnOne && (
          <Button start={false} style={(btnStyle)}>
            {textBtnOne}
          </Button>
        )}
        {textBtnTwo && <Button>{textBtnTwo}</Button>}
      </InfoBox>

      {src && (
        <ImageContainer>
          <Image src={src} />
        </ImageContainer>
      )}
    </Wrapper>
  )
}
