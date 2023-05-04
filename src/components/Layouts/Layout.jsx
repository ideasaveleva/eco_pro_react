import { Footer } from './Footer/Footer.jsx'
import { Header } from './Header/Header.jsx'
import { Wrapper } from './NavBar/styles.jsx'

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <Footer />
    </Wrapper>
  )
}
