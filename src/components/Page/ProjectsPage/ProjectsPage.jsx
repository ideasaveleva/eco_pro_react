// import { Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { aboutCompany } from '../../../data/PropertiesList.jsx'
import { PropertiesBigCard } from '../../Card/PropertiesBigCard/PropertiesBigCard.jsx'
import { BackgroundPage } from '../../Layouts/BackgroundPage/BackgroundPage.jsx'
import { Header } from '../../Layouts/Header/Header.jsx'

export const ProjectsPage = () => {
  const { ongoingOne } = aboutCompany

  return (
    <div>
      <BackgroundPage
        style={{
          backgroundImage: `url(/static/img/ongoing-back.png)`,
					backgroundColor: '#5DA104',
					margin: 0,
        }}
      >
        <div className='container'>
          <Header />

          <PropertiesBigCard
            style={{
              color: 'white',
              flexDirection: 'row-reverse',
            }}
            titleStyle={{
              color: 'white',
              fontFamily: 'Days One',
            }}
            title={ongoingOne.title}
            firstParagraph={ongoingOne.textOne}
            textBtnOne={ongoingOne.btnOne}
            btnStyle={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              marginTop: '20px',
            }}
            src={ongoingOne.src}
          />
        </div>
      </BackgroundPage>
      <Outlet />
    </div>
  )
}
