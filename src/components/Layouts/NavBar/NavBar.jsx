import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Image, LinkBox, WrapLinkList, Wrapper } from './styles.jsx'

export const NavBar = () => {
  const [isOpenLink, setIsOpenLink] = useState(false)

  return (
    <Wrapper>
      <LinkBox>
        <Image src='/static/img/icon-flower.png' alt='icon flower' />

        <NavLink
          to='.'
          className='nav-link'
          style={({ isActive }) => (isActive ? { color: '#5DA104' } : {})}
        >
          Home
        </NavLink>
        <WrapLinkList onClick={() => setIsOpenLink(!isOpenLink)}>
          <NavLink
            to='projects'
            className='nav-link'
            style={({ isActive }) => (isActive ? { color: '#5DA104' } : {})}
          >
            Ongoing projects
          </NavLink>
          {isOpenLink ? (
            <Image src='/static/img/arrow2.png' alt='icon arrow' />
					) : (
					<Image src='/static/img/arrow.png' alt='icon arrow' />
					)}
        </WrapLinkList>
        {isOpenLink && (
          <>
            <NavLink
              to='/projects/one'
              className='nav-link_children'
              style={({ isActive }) => (isActive ? { color: '#5DA104' } : {})}
            >
              One tree for every key
            </NavLink>
            <NavLink
              to='/projects/forest'
              className='nav-link_children'
              style={({ isActive }) => (isActive ? { color: '#5DA104' } : {})}
            >
              Enchanted forest
            </NavLink>
          </>
        )}

        <NavLink
          to='services'
          className='nav-link'
          style={({ isActive }) => (isActive ? { color: '#5DA104' } : {})}
        >
          Corporate Services
        </NavLink>
        <NavLink
          to='alliances'
          className='nav-link'
          style={({ isActive }) => (isActive ? { color: '#5DA104' } : {})}
        >
          Project & Alliances
        </NavLink>
        <NavLink
          to='about'
          className='nav-link'
          style={({ isActive }) => (isActive ? { color: '#5DA104' } : {})}
        >
          About us
        </NavLink>
        <NavLink
          to='contacts'
          className='nav-link'
          style={({ isActive }) => (isActive ? { color: '#5DA104' } : {})}
        >
          Contacts
        </NavLink>
        <Image src='/static/img/icon-flower.png' alt='icon flower' />
      </LinkBox>
    </Wrapper>
  )
}
