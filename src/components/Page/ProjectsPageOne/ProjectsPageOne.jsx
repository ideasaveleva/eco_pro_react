import { Button } from '../../Elements/Button/Button.jsx'
import {
  BtnBox,
  BtnMedia,
  Icon,
  Image,
  ImageJobCenter,
  ImageMedia,
  JobLogoBox,
  JobText,
  Logo,
  LogoBox,
  LogoDiv,
  LogoJob,
  LogoMain,
  MainBox,
  PhotoContainer,
  Text,
  TextBox,
  TextIconWrap,
  Title,
  Wrapper,
} from './styles.jsx'

export const ProjectsPageOne = () => {
  return (
    <>
      <div className='container'>
        <Wrapper>
          <Title>ONE TREE FOR EVERY KEY</Title>
          <TextBox>
            <TextIconWrap>
              <Icon src='/static/img/icon-flower-green.png' alt='icon flower' />
              <p>
                6 natives trees/shrubs to be planted by your staff on the
                planting day – … Feb or March
              </p>
            </TextIconWrap>
            <TextIconWrap>
              <Icon src='/static/img/icon-flower-green.png' alt='icon flower' />
              <p>Your company logo at the entrance banner </p>
            </TextIconWrap>
            <TextIconWrap>
              <Icon src='/static/img/icon-flower-green.png' alt='icon flower' />
              <p>
                Pictures and official recognitions for the project participants
                before, during and after the event
              </p>
            </TextIconWrap>
            <TextIconWrap>
              <Icon src='/static/img/icon-flower-green.png' alt='icon flower' />
              <p>Environmental goals reduce, reuse, reforest and respect</p>
            </TextIconWrap>
          </TextBox>
          <LogoBox>
            <Logo src='/static/img/oleta.png' alt='' />
            <Logo src='/static/img/vera-logo-horiz.png' alt='' />
            <Logo src='/static/img/mortgage.png' alt='' />
          </LogoBox>
          <Button style={{ display: 'flex', margin: '0 auto' }}>Join us</Button>
        </Wrapper>

        <PhotoContainer>
          <Image src='/static/img/people1.png' alt='' />
          <Image src='/static/img/people2.png' alt='' />
          <Image src='/static/img/people3.png' alt='' />
          <Image src='/static/img/people4.png' alt='' />
          <Image src='/static/img/people5.png' alt='' />
          <Image src='/static/img/people6.png' alt='' />
        </PhotoContainer>

        <Title>OLETA RIVER STATE PARK</Title>
        <JobText>
          <Text>
            The important project aimed at active landscaping of the territory
            by collective planting of the trees! Unfortunately, at the moment
            few people realize the colossal importance of trees, although they
            are part of the natural global environment and are used for
            building, making paper, laying roads and, in general, provide us
            with comfort and benefit in many ways. By joining us, you will be
            able to participate in the events held and contribute to the
            improvement of the environment!
          </Text>
          <ImageJobCenter>
            <img src='/static/img/job.png' alt='' />
          </ImageJobCenter>
          <JobLogoBox>
            <LogoJob src='/static/img/logo-job.png' alt='' />
            <BtnMedia>
              <Button>Join us</Button>
            </BtnMedia>
          </JobLogoBox>
        </JobText>

        <ImageMedia src='/static/img/job.png' alt='' />
        <BtnBox>
          <Button>Join us</Button>
        </BtnBox>

        <Title>ECO VERA REALTY</Title>
        <MainBox>
          <div>
            <p style={{maxWidth: '686px'}}>
              Our environment is a very important part of our world, and if we
              want to be able to stay on this earth much longer we have to be
              responsible. Our future is going to be dependent on our focus now
              on the environment. Vera Realty is one of participant of the
              planting program with Green Miami Events. This is the amazing
              program for Vera team, for our clients and partners. We proud that
              our agent Mavi Haime is the main inspirer of the project and she
              heads Green Miami Events.
            </p>
            <LogoDiv>
              <LogoMain src='/static/img/logo-oleta.png' alt='' />
              <LogoMain src='/static/img/logo-florida.png' alt='' />
              <LogoMain src='/static/img/logo.png' alt='' />
              <LogoMain src='/static/img/logo-job.png' alt='' />
            </LogoDiv>
          </div>
          <div>
            <Image src='/static/img/main-photo.png' alt='' />
          </div>
        </MainBox>
      </div>
    </>
  )
}
