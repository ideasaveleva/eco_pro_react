// import { Outlet } from 'react-router-dom'
import { aboutCompany } from '../../../data/PropertiesList.jsx'
import { PropertiesBigCard } from '../../Card/PropertiesBigCard/PropertiesBigCard.jsx'
import { Button } from '../../Elements/Button/Button.jsx'
import { BackgroundPage } from '../../Layouts/BackgroundPage/BackgroundPage.jsx'
import { Header } from '../../Layouts/Header/Header.jsx'
import {
  Icon,
  IconTextBox,
  Image,
  ImageInContainer,
  ImageInMedia,
  ImageMedia,
  InfoBox,
  Text,
  TextBlockTwo,
  TextContainer,
  Title,
  BtnBox,
  BtnBoxMedia,
  TextBlock,
  IconTextBoxBig,
} from './styles.jsx'

export const ServicesPage = () => {
  const { serviceOne } = aboutCompany
  return (
    <>
      <BackgroundPage
        style={{
          backgroundImage: `url(/static/img/service-green.png)`,
          backgroundColor: '#5DA104',
        }}
      >
        <div className='container'>
          <Header />

          <PropertiesBigCard
            style={{
              color: 'white',
            }}
            titleStyle={{
              color: 'white',
              fontFamily: 'Days One',
            }}
            title={serviceOne.title}
            firstParagraph={serviceOne.textOne}
            textBtnOne={serviceOne.btnOne}
            btnStyle={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              marginTop: '20px',
            }}
            src={serviceOne.src}
          />
        </div>
      </BackgroundPage>

      <div className='container'>
        <Title>Our Services Include:</Title>
        <InfoBox>
          <TextContainer>
            <IconTextBoxBig>
              <Icon src='/static/img/icon-flower-green.png' />
              <Text>
                Experienced carbon footprint event management consultant to
                support your event(s) and for a whole year following the
                assessment
              </Text>
            </IconTextBoxBig>
            <IconTextBoxBig>
              <Icon src='/static/img/icon-flower-green.png' />
              <Text>
                Concept Design (2 initial designs - pick one - then 3 revisions)
              </Text>
            </IconTextBoxBig>
            <IconTextBoxBig>
              <Icon src='/static/img/icon-flower-green.png' />
              <Text>Vendor quoting and contracting</Text>
            </IconTextBoxBig>
            <IconTextBoxBig>
              <Icon src='/static/img/icon-flower-green.png' />
              <Text>Lodging, Catering and Travel Planning</Text>
            </IconTextBoxBig>
            <IconTextBoxBig>
              <Icon src='/static/img/icon-flower-green.png' />
              <Text>Event Supervision and Administration</Text>
            </IconTextBoxBig>
            <IconTextBoxBig>
              <Icon src='/static/img/icon-flower-green.png' />
              <Text>Staffing, Transportation and Security</Text>
            </IconTextBoxBig>
					</TextContainer>
					
          <ImageInContainer>
            <Image src='/static/img/service2.png' />
          </ImageInContainer>
        </InfoBox>
      </div>

      <ImageInMedia>
        <ImageMedia src='/static/img/service2-media.png' />
      </ImageInMedia>

      <div className='container'>
        <InfoBox style={{ flexDirection: 'row-reverse' }}>
          <TextBlockTwo>
            <TextBlock>
              From your overall event budget we will plant native trees or
              shrubs in one of our County and Estate selected public parks or
              environmentally endangered lands in South Florida already assigned
              to us thanks to our alliances with government-driven environmental
              campaigns.
            </TextBlock>
            <TextContainer>
          
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <Text>Conferences</Text>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <Text>Seminars</Text>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <Text>Team Building Events</Text>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <Text>Trade Shows / Expos</Text>
                </IconTextBox>
            
              
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <Text>Executive Retreats</Text>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <Text>Business/Corporate Dinners</Text>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <Text>Corporate Golf Days</Text>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <Text>Product Launches</Text>
                </IconTextBox>
            
            </TextContainer>
            <BtnBoxMedia>
              <Button>Contact us</Button>
            </BtnBoxMedia>
          </TextBlockTwo>
          <ImageInContainer>
            <Image src='/static/img/service3.png' />
          </ImageInContainer>
        </InfoBox>
      </div>

      <ImageInMedia>
        <ImageMedia src='/static/img/service3-media.png' />
      </ImageInMedia>

      <BtnBox style={{textAlign: 'center'}}>
        <Button>Contact us</Button>
      </BtnBox>
    </>
  )
}
