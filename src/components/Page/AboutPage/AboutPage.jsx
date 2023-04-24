import { aboutCompany } from '../../../data/PropertiesList.jsx'
import { Button } from '../../Elements/Button/Button.jsx'
import { FeedbackForm } from '../../Form/FeedbackForm.jsx'
import { BackgroundPage } from '../../Layouts/BackgroundPage/BackgroundPage.jsx'
import { Header } from '../../Layouts/Header/Header.jsx'
import { IconsList } from '../../List/IconsList/IconsList.jsx'
import {
  BtnMediaNone,
  Card,
  Icon,
  IconTextBox,
  Image,
  ImageCard,
  ImageMedia,
  ImageMedia1,
  InfoList,
  PhotoContainer,
  Text,
  TextMedia,
  TextMediaNew,
  TextNew,
  TextQuote,
  Title,
  TitleCard,
  TitleThree,
  TitleTwo,
  WrapAbout,
  WrapTitleBtn,
} from './styles.jsx'

export const AboutPage = () => {
  const { aboutImg } = aboutCompany

  return (
    <div>
      <BackgroundPage
        style={{
          background: 'linear-gradient(180deg, #5DA104 0%, #FFFFFF 87.5%)',
        }}
      >
        <div className='container'>
          <Header />

          <WrapAbout>
            <div>
              <Title>Mavi Haime</Title>
              <TitleThree>Executive Director Green Miami Events</TitleThree>
              <div>
                <ImageMedia src='/static/img/about-team2-media.png' alt='' />
              </div>
              <Text>
                In the year 2000 my family and I moved from Bogota, Colombia to
                Miami in search for better opportunities.
              </Text>
              <TextNew>
                With a Master in Marketing and Advertising at the Jorge Tadeo
                Lozano University in Bogota, I proceeded to work in a fast
                upscale environment, assuring big success.
              </TextNew>
              <TextMedia>
                I am passionate about horses, real estate investments, corporate
                sustainability, promoting environmental awareness and social
                responsibility.
                <br /> With encouragement from my family, I began a Real Estate
                career in the US along with many other environmental projects,
                expos and social/corporate events in Miami since 2001.
              </TextMedia>
              <TextMedia>
                I am the co -founder of Green Miami Events, an event planning
                company dedicated to the development and execution of zero
                carbon footprint events and campaigns , promoter and former
                Executive Director of Bioplanet USA ( environmental NGO ) today
                active in USA. Mexico , Honduras and Colombia.
              </TextMedia>
            </div>
            <div>
              <Image src='/static/img/about-team2.png' alt='' />
              <ImageMedia1 src='/static/img/about-team2-media1.png' alt='' />
            </div>
          </WrapAbout>

          <TextMediaNew>
            I am passionate about horses, real estate investments, corporate
            sustainability, promoting environmental awareness and social
            responsibility . <br />
            With encouragement from my family, I began a Real Estate career in
            the US along with many other environmental projects, expos and
            social/corporate events in Miami since 2001. <br />I am the co
            -founder of Green Miami Events, an event planning company dedicated
            to the development and execution of zero carbon footprint events and
            campaigns , promoter and former Executive Director of Bioplanet USA
            ( environmental NGO ) today active in USA. Mexico , Honduras and
            Colombia.
          </TextMediaNew>

          <TextQuote>
            <p>
              I will : "Provide environmental support and corporate governance
              to your business event .Successfully will implement and managed
              environmental concepts into to your existing business processes."
            </p>
          </TextQuote>

          <InfoList>
            <div>
              <TitleTwo>My former leadership experience</TitleTwo>
              <div>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>BOD member of WIZO FLORIDA</p>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>Sales Director for Cornerstone Group</p>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>Executive Director of Bioplanet USA</p>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>Treasurer at Oceania Tower IV BOD</p>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>President of Oceania Tower IV Association BOD</p>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>
                    Member at the Neat Streets Miami Miami Dade committee and
                    Representing Bioplanet USA at the BOD.CIAB (MDPR)
                  </p>
                </IconTextBox>
              </div>
            </div>

            <div>
              <TitleTwo>Actually</TitleTwo>
              <div>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>Board member of Miami Dade Tree and Landscape Committee</p>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>
                    Committee member for Million Trees Miami ( Miami Dade ) new
                    projects marketing and events
                  </p>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>CEO for J.Iriarte y Asociados, in Colombia</p>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>CEO for J.Iriarte y Asociados, in Colombia</p>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>
                    Dezer Platinum Realty / Sales Associate / International
                    Sales Rep.
                  </p>
                </IconTextBox>
                <IconTextBox>
                  <Icon src='/static/img/icon-flower-green.png' />
                  <p>Executive Director Green Miami Events llC</p>
                </IconTextBox>
              </div>
            </div>
          </InfoList>
        </div>
      </BackgroundPage>

      <div style={{ justifyContent: 'center' }} className='container'>
        <WrapTitleBtn>
          <Title style={{ color: '#5DA104' }}>ECO VERA TEAM</Title>
          <BtnMediaNone>
            <Button style={{ fontSize: '20px' }}>Join us</Button>
          </BtnMediaNone>
        </WrapTitleBtn>

        <PhotoContainer>
          {aboutImg.photos.map((el) => (
            <Card>
              <ImageCard src={el.src} key={el.id} />
              <TitleCard>{el.name}</TitleCard>
              <span>{el.role}</span>
            </Card>
          ))}
        </PhotoContainer>
      </div>

      <IconsList />

      <div className='container'>
        <FeedbackForm style={{ margin: '0px auto' }}>WRITE TO US</FeedbackForm>
      </div>
    </div>
  )
}
