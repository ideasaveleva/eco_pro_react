import {
  AboutContainer,
  ContainerIcon,
  FooterBox,
  Icon,
  Link,
  NavContainer,
  NavIcon,
  Wrapper,
  TextLinkBox,
} from './styles.jsx'

export const Footer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <FooterBox>
          <ContainerIcon>
            <Icon src='/static/img/logo.png' alt='logo company' />
          </ContainerIcon>

          <TextLinkBox>
            <div>
              <Link
                style={{ display: 'block', marginBottom: '11px'}}
                href='tel:+13057880595'
              >
                +1 (305) 788-0595
              </Link>
              <Link
                style={{ display: 'block', marginBottom: '11px'}}
                href='mailto:greenmiamievents@gmail.com'
              >
                greenmiamievents@gmail.com
              </Link>
              <NavContainer>
                <NavIcon src='/static/img/facebook.png' alt='logo facebook' />
                <NavIcon src='/static/img/whatsapp.png' alt='logo whatsapp' />
                <NavIcon src='/static/img/twitter.png' alt='logo twitter' />
                <NavIcon src='/static/img/inst.png' alt='logo instagram' />
              </NavContainer>
            </div>

            <AboutContainer>
              <Link style={{ textDecoration: 'underline' }} href='/'>
                Privacy Policy
              </Link>
              <span style={{ marginLeft: '8px', marginRight: '8px' }}>|</span>
              <Link style={{ textDecoration: 'underline' }} href='/'>
                Terms and Conditions
              </Link>
              <p style={{ fontSize: '16px' }}>
                Vera Realty LLC and its subsidiaries fully supportthe principles
                of the
                <Link
                  style={{
                    marginLeft: '10px',
                    fontSize: '16px',
                    textDecoration: 'underline',
                  }}
                  href='/'
                >
                  Fair Housing Act
                </Link>
                <br />© 2023 Vera Realty LLC
              </p>
            </AboutContainer>
          </TextLinkBox>
        </FooterBox>
      </div>
    </Wrapper>
  )
}
