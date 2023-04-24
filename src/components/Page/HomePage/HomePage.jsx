          import { NavLink } from 'react-router-dom'
import { aboutCompany } from '../../../data/PropertiesList.jsx'
import { PropertiesBigCard } from '../../Card/PropertiesBigCard/PropertiesBigCard.jsx'
import { FeedbackForm } from '../../Form/FeedbackForm.jsx'
import { BackgroundPage } from '../../Layouts/BackgroundPage/BackgroundPage.jsx'
import { Header } from '../../Layouts/Header/Header.jsx'
import { AlliancesList } from '../../List/AlliancesList/AlliancesList.jsx'
import { IconsList } from '../../List/IconsList/IconsList.jsx'
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
          backgroundImage: `url(/static/img/mask-group.png)`,
          overflow: 'hidden',
        }}
      >
        <div className='container'>
          <Header />

          <PropertiesBigCard
            style={{
              color: 'white',
              lineHeight: '25px',
              padding: '100px 0',
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

      <IconsList />

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
            {/* <BlockContainerImage>
              <div>
                <ImageXl src='/static/img/vera-logo.png' />
              </div>
              <div>
                <ImageL src='/static/img/vera-logo-horiz.png' />
              </div>
              <div>
                <ImageBox
                  style={{ marginBottom: '15px' }}
                  src='/static/img/oleta.png'
                  alt=''
                />
              </div>
              <div>
                <ImageBox src='/static/img/mortgage.png' alt='' />
              </div>
            </BlockContainerImage> */}
          </BtnIconBox>
        </Wrapper>

        {/* <PropertiesBigCard
          titleStyle={{
            color: '#5DA104',
            fontSize: '40px',
            lineHeight: '40px',
            fontFamily: 'Days One',
          }}
          firstParagraph={homeTwo.textOne}
          secondParagraph={homeTwo.textTwo}
          title={homeTwo.title}
          block={true}
				/> */}

        <PropertiesBigCard
          style={{ paddingTop: '40px' }}
          titleStyle={{
            marginBottom: '40px',
            color: '#5DA104',
            fontSize: '40px',
            lineHeight: '40px',
            fontFamily: 'Days One',
          }}
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
            style={{
              paddingTop: '130px',
            }}
            titleStyle={{
              color: '#09570C',
              fontSize: '60px',
              lineHeight: '60px',
              fontFamily: 'Days One',
              marginBottom: '43px',
            }}
            firstParagraph={homeFour.textOne}
            title={homeFour.title}
            textBtnOne={homeFour.btnOne}
            btnStyle={{
              backgroundColor: '#09570C',
              fontSize: '20px',
              padding: '20px 45px',
              borderRadius: '10px',
              marginTop: '43px',
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
          padding: '100px 0',
        }}
      >
        <FeedbackForm>WRITE TO US</FeedbackForm>
      </div>
    </div>
  )
}
