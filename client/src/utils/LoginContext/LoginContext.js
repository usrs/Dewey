import { createContext } from 'react'

const LoginContext = createContext({
    username: '',
    password: '',
    handleInputLoginChange: () => { },
    handleLoginSubmit: () => { },
    handleSignUpDivert: () => { }
})

export default LoginContext