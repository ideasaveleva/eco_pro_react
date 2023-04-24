import { InputWrapper } from './styles.jsx'

export const Input = ({ style, onChange, value, placeholder }) => {
  return (
    <div>
      <InputWrapper
        style={style}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}
