import { aboutCompany } from '../../../data/PropertiesList.jsx'
import { PropertiesBigCard } from '../../Card/PropertiesBigCard/PropertiesBigCard.jsx'
import { Button } from '../../Elements/Button/Button.jsx'
import { FeedbackForm } from '../../Form/FeedbackForm.jsx'
import { BackgroundPage } from '../../Layouts/BackgroundPage/BackgroundPage.jsx'
import { Header } from '../../Layouts/Header/Header.jsx'
import {
  FeedbackBox,
  Icon,
  IconsContainer,
  Image,
  ImageBox,
  ImagePoster,
  ImageXL,
  Line,
  PhotosBox,
  PostersContainer,
  Title,
  ContainerFeedbackBtn,
} from './styles.jsx'

export const AlliancesPage = () => {
  const { alliances } = aboutCompany

  return (
    <>
      <BackgroundPage
        style={{
          backgroundImage: `url(/static/img/ongoing-back.png)`,
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
            title={alliances.title}
            firstParagraph={alliances.textOne}
            textBtnOne={alliances.btnOne}
            btnStyle={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              marginTop: '20px',
            }}
            src={alliances.src}
          />
        </div>
      </BackgroundPage>

      <div className='container'>
        <IconsContainer>
          {alliances.icons.map((icon) => (
            <Icon src={icon.src} key={icon.id} />
          ))}
        </IconsContainer>

        <Title>
          If you want to vividly declare your business, see new facets of your
          capabilities and be involved in a truly noble mission - join us!
        </Title>

        <FeedbackBox>
          <ImageBox>
            <ImageXL src='/static/img/people.png' />
          </ImageBox>
          <ContainerFeedbackBtn>
            <div>
							<FeedbackForm/>
            </div>

            <div className='start-text'>
              <Button>Submit</Button>
            </div>
          </ContainerFeedbackBtn>
        </FeedbackBox>

        <Line />

        <PhotosBox>
          {alliances.photos.map((el) => (
            <Image src={el.src} key={el.id} />
          ))}
        </PhotosBox>

        <PostersContainer>
          {alliances.posters.map((el) => (
            <ImagePoster src={el.src} key={el.id} />
          ))}
        </PostersContainer>
      </div>
    </>
  )
}
