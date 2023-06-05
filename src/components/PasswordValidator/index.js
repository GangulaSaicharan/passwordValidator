import {useState} from 'react'
import {
  MainContainer,
  Card,
  Heading,
  Text,
  Input,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [showMsg, toggleMsg] = useState(true)
  const [input, setInput] = useState('')

  const onChangeInput = event => {
    setInput(event.target.value)
    if (input.length >= 8) {
      toggleMsg(false)
    }
  }

  return (
    <MainContainer>
      <Card>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <Input value={input} type="password" onChange={onChangeInput} />
        {showMsg && (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        )}
      </Card>
    </MainContainer>
  )
}

export default PasswordValidator
