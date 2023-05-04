import { FeedbackForm } from '../../Form/FeedbackForm.jsx'
import { BackgroundPage } from '../../Layouts/BackgroundPage/BackgroundPage.jsx'
import {
  Link,
  LinkBox,
  NavContainer,
  NavIcon,
  Title,
  Wrapper,
} from './styles.jsx'
import {Header} from '../../Layouts/Header/Header.jsx'

export const ContactsPage = () => {
  return (
    <div>
      <BackgroundPage
        style={{
          backgroundImage: `none`,
          backgroundColor: '#5DA104',
        }}
      >
        <div className='container'>
          <Header />

          <Wrapper>
            <LinkBox>
              <Title>CONTACT</Title>
              <NavContainer>
                <NavIcon src='/static/img/facebook.png' alt='logo facebook' />
                <NavIcon src='/static/img/whatsapp.png' alt='logo whatsapp' />
                <NavIcon src='/static/img/twitter.png' alt='logo twitter' />
                <NavIcon src='/static/img/inst.png' alt='logo instagram' />
              </NavContainer>
              <Link style={{ display: 'block' }} href='tel:+13057880595'>
                +1 (305) 788-0595
              </Link>
              <Link
                style={{ display: 'block' }}
                href='mailto:greenmiamievents@gmail.com'
              >
                greenmiamievents@gmail.com
              </Link>
              <Link
                style={{ display: 'block', textDecoration: 'underline' }}
                href='https://verarealty.com/es/eco_program/'
              >
                Vera Realty Eco Cares
              </Link>
            </LinkBox>

            <FeedbackForm
              style={{ textAlign: 'start', maxWidth: '460px' }}
              styleTitle={{ color: '#FFF' }}
              styleBtn={{
                backgroundColor: '#fff',
                color: '#000',
                display: 'inline-block',
              }}
            >
              WRITE TO US
            </FeedbackForm>
          </Wrapper>
        </div>
      </BackgroundPage>
    </div>
  )
}
