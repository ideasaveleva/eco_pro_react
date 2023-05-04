import { NavLink } from 'react-router-dom'
import { aboutCompany } from '../../../data/PropertiesList.jsx'
import { PropertiesBigCard } from '../../Card/PropertiesBigCard/PropertiesBigCard.jsx'
import { FeedbackForm } from '../../Form/FeedbackForm.jsx'
import { BackgroundPage } from '../../Layouts/BackgroundPage/BackgroundPage.jsx'
import { Header } from '../../Layouts/Header/Header.jsx'
import { AlliancesList } from '../../List/AlliancesList/AlliancesList.jsx'
import {
  BtnIconBox,
  IconBox,
  Image,
  ImageBackground,
  ImageBox,
  ImageL,
  ImageXl,
  Text,
  TextContainer,
  Title,
  TitleTwo,
  Wrapper,
} from './styles.jsx'

export const HomePage = () => {
  const { homeOne, homeTwo, homeThree, homeFour } = aboutCompany

  return (
    <div>
      <BackgroundPage
        style={{
          // backgroundImage: `url(/static/img/mask-group.png)`,
          overflow: 'hidden',
          backgroundSize: '100% 100%',
        }}
      >
        <div className='container'>
          <Header />

          <PropertiesBigCard
            style={{
              color: 'white',
            }}
            titleStyle={{
              color: '#fff',
              fontFamily: 'Days One',
            }}
            title={homeOne.title}
            textBtnOne={homeOne.btnOne}
          />
        </div>
      </BackgroundPage>

      {/* <IconsList /> */}

      <div className='container'>
        <Wrapper>
          <TextContainer style={{ maxWidth: '712px' }}>
            <Title>Ongoing projects</Title>
            <TitleTwo>ONE TREE FOR EVERY KEY</TitleTwo>
            <Text>
              Nowadays, people in every sense have moved away from nature, as if
              not noticing the incredible amount of resources that it gives us.
              The most important thing we can do is to change our attitude
              towards the environment and start taking action! The main mission
              of our projects is the improvement and landscaping of our region
              and establishing closer contact with nature. We strongly believe
              that by working together we can get closer to the point we are
              swearing to!
            </Text>
          </TextContainer>
          <BtnIconBox>
            <NavLink className='nav-link-custom' to='/projects/one'>
              View ongoing projects
            </NavLink>
            <IconBox>
              <div>
                <ImageXl src='/static/img/vera-logo.png' />
                <ImageL src='/static/img/vera-logo-horiz.png' />
              </div>
              <ImageBox>
                <div>
                  <Image src='/static/img/oleta.png' alt='' />
                </div>
                <div>
                  <Image src='/static/img/mortgage.png' alt='' />
                </div>
              </ImageBox>
            </IconBox>
          </BtnIconBox>
        </Wrapper>

        <PropertiesBigCard
          titleStyleCustom='title-style-custom'
          styleText={{ margin: 0 }}
          firstParagraph={homeThree.textOne}
          title={homeThree.title}
          src={homeThree.src}
          srcIcon={homeThree.srcIcon}
          icon={true}
        />
      </div>

      <ImageBackground>
        <div className='container'>
          <PropertiesBigCard
            titleStyle={{
              color: '#09570C',
              fontFamily: 'Days One',
            }}
            firstParagraph={homeFour.textOne}
            title={homeFour.title}
            textBtnOne={homeFour.btnOne}
            btnStyle={{
              backgroundColor: '#09570C',
              margin: '30px 0 10px',
            }}
          />
        </div>
      </ImageBackground>

      <AlliancesList />

      <div
        className='container'
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '50px 0',
        }}
      >
        <FeedbackForm
          style={{
            minWidth: '255px',
          }}
        >
          WRITE TO US
        </FeedbackForm>
      </div>
    </div>
  )
}
