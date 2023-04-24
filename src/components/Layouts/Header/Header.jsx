import { useState } from 'react'
import { NavBar } from '../NavBar/NavBar.jsx'
import {
  ContainerCall,
  ContainerIcon,
  HeaderBox,
  Icon,
  Image,
  ImageNav,
} from './styles.jsx'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderBox>
      <ContainerCall>
        {isOpen ? (
          <ImageNav
            onClick={() => setIsOpen(!isOpen)}
            src='/static/img/exit.png'
            alt='icon exit'
          />
        ) : (
          <ImageNav
            onClick={() => setIsOpen(!isOpen)}
            src='/static/img/menu.png'
            alt='icon menu'
          />
        )}

        <Image src='/static/img/phone.png' alt='icon phone' />
      </ContainerCall>

      {isOpen && <NavBar />}

      <ContainerIcon>
        <Icon src='/static/img/logo.png' alt='logo company' />
      </ContainerIcon>
    </HeaderBox>
  )
}
