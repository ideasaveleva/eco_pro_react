import { Button } from '../Elements/Button/Button.jsx'
import { Input } from '../Elements/Input/Input.jsx'
import { Title, Wrapper } from './styles.jsx'

export const FeedbackForm = ({ children, style, styleTitle, styleBtn }) => {
  const buttons = [
    {
      label: 'no preference',
      value: 1,
    },
    {
      label: 'phone call',
      value: 2,
    },
    {
      label: 'text message',
      value: 3,
    },
    {
      label: 'email',
      value: 4,
    },
  ]
  return (
    <Wrapper style={style}>
      {children && <Title style={styleTitle}>{children}</Title>}

      <div>
        <Input placeholder={'Name*'} />
        <Input placeholder={'Cell*'} />
        <Input placeholder={'Email*'} />
        <Input placeholder={'Message'} />
      </div>

			{styleBtn && 
				<Button style={styleBtn}>Submit</Button>
			}
    </Wrapper>
  )
}
