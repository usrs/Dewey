import { createContext } from 'react'

const SignUpContext = createContext({
    name: '',
    email: '',
    username: '',
    password: '',
    handleInputSignUpChange: () => { },
    handleSignUpSubmit: () => { }
})

export default SignUpContext