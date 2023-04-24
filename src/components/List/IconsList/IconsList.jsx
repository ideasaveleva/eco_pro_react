import { icons } from '../../../data/PropertiesList.jsx'
import { IconBox } from './IconBox/IconBox.jsx'
import { Wrapper } from './styles.jsx'

export const IconsList = () => {
  return (
    <Wrapper>
      {icons.map((icon) => (
        <IconBox nameImg={icon.name} key={icon.id} src={icon.src} />
      ))}
    </Wrapper>
  )
}
