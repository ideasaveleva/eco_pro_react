import { Route, Routes } from 'react-router-dom'

import { AboutPage } from '../components/Page/AboutPage/AboutPage.jsx'
import { AlliancesPage } from '../components/Page/AlliancesPage/AlliancesPage.jsx'
import { ContactsPage } from '../components/Page/ContactsPage/ContactsPage.jsx'
import { HomePage } from '../components/Page/HomePage/HomePage.jsx'
import { NotFoundPage } from '../components/Page/NotFoundPage/NotFoundPage.jsx'
import { ProjectsPageForest } from '../components/Page/ProjectsPageForest/ProjectsPageForest.jsx'
import { ProjectsPageOne } from '../components/Page/ProjectsPageOne/ProjectsPageOne.jsx'
import { ProjectsPage } from '../components/Page/ProjectsPage/ProjectsPage.jsx'
import { ServicesPage } from '../components/Page/ServicesPage/ServicesPage.jsx'

import { Wrapper } from './styles.jsx'

export const RoutesRoot = () => {

  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route index element={<HomePage />} />

        <Route path='projects' element={<ProjectsPage />}>
          <Route path='one' element={<ProjectsPageOne />} />
          <Route path='forest' element={<ProjectsPageForest />} />
        </Route>
        {/* <Route path='properties/:slug' element={<SingleCourse />} /> */}

        <Route path='services' element={<ServicesPage />} />
        <Route path='alliances' element={<AlliancesPage />} />

        <Route path='about' element={<AboutPage />} />
        <Route path='contacts' element={<ContactsPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Wrapper>
  )
}
