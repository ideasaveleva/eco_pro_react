import { Button } from '../../Elements/Button/Button.jsx'
import {
  FirstWord,
  Image,
  PhotoContainer,
  TextBox,
  Title,
  Title2,
  Wrapper,
  MiniWrapper,
} from './styles.jsx'

export const ProjectsPageForest = () => {
  return (
    <div className='container'>
      <Title>The Enchanted Forest Park with North Miami</Title>
      <Title2>The Project Goals </Title2>

      <Wrapper>
        <MiniWrapper>
          <TextBox>
            <FirstWord>Enrich</FirstWord>the equestrian facilities to the best
            quality and safety with the goals of better services to the
            community and the fair management for healthy horses in the facility
          </TextBox>
          <TextBox>
            <FirstWord>Create</FirstWord>in the Enchanted Forest acreage the
            best and functional equestrian facility with community educational
            services.
          </TextBox>
          <TextBox>
            <FirstWord>Incorporate</FirstWord>5 additional acres to the
            equestrian facility
          </TextBox>
          <TextBox>
            <FirstWord>Create</FirstWord>Project goal Tracker. Plan for Plaques
            for major donors. Recognition certificates
          </TextBox>
        </MiniWrapper>
        <MiniWrapper>
          <TextBox>
            <FirstWord>Enhance</FirstWord>the environmental programs to keep and
            renew the existing canopy, create educational opportunities towards
            the maintenance of the native canopy and biodiversity in the park
          </TextBox>

          <TextBox>
            <FirstWord>Implement</FirstWord>Community services and environmental
            protected, educational programs towards the healthy mental and
            physical wellbeing of the children, adults and veterans in our
            communities
          </TextBox>

          <TextBox>
            <FirstWord>Create</FirstWord>a Training Certification program for
            young adults to introduce the possibility of a career as a police
            officer. To help with lack of applicant for police officers.
            “Training Program” “with graduation and certification” High school
            Seniors. Ages (16-25). Brainstorm with NMPD.
          </TextBox>
        </MiniWrapper>
      </Wrapper>

      <Button style={{ display: 'flex', margin: '0px auto' }}>Join us</Button>

			<PhotoContainer>
        <Image src='/static/img/forest1.png' alt='' />
        <Image src='/static/img/forest2.png' alt='' />
        <Image src='/static/img/forest3.png' alt='' />
      </PhotoContainer>
    </div>
  )
}
