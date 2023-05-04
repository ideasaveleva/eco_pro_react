import { Button } from '../../Elements/Button/Button.jsx'
import { BoxHomeIcons, GreenBox, Image, Title, Wrapper } from './styles.jsx'

export const AlliancesList = () => {
  return (
    <Wrapper>
      <GreenBox>
        <Title>Projects & Alliances</Title>
        {/* <LogoBox> */}
        <BoxHomeIcons>
          <div>
            <Image src='/static/img/Alliances1.png' alt='logo Alliances' />
          </div>

          <div>
            <Image src='/static/img/Alliances2.png' alt='logo Alliances' />
          </div>

          <div>
            <Image src='/static/img/Alliances3.png' alt='logo Alliances' />
          </div>

          <div>
            <Image src='/static/img/Alliances4.png' alt='logo Alliances' />
          </div>

          <div>
            <Image src='/static/img/Alliances5.png' alt='logo Alliances' />
          </div>

          <div>
            <Image src='/static/img/Alliances6.png' alt='logo Alliances' />
          </div>

          <div>
            <Image src='/static/img/Alliances7.png' alt='logo Alliances' />
          </div>
        </BoxHomeIcons>
        {/* </LogoBox> */}
        <Button style={{ backgroundColor: '#fff', color: '#000'}}>
          View gallery
        </Button>
      </GreenBox>
    </Wrapper>
  )
}
