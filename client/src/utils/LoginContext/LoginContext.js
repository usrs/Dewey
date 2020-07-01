import { createContext } from 'react'

const LoginContext = createContext({
    username: '',
    password: '',
    handleInputLoginChange: () => { },
    handleLoginSubmit: () => { }
})

export default LoginContext