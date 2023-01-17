import { createContext, useState } from 'react'

export const Context = createContext({})

export function UserProvider( {children} ) {
  const [userName, setUserName] = useState("Andre")
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [count, setCount] = useState(2) 
  const inputDesbotado = "#F2F2F2"
  const inputAtivo = "#FFFFFF"

  return (
    <Context.Provider value={{
        token,
        setToken,
        userName,
        setUserName,
        inputDesbotado,
        inputAtivo,
        count,
        setCount
    }}>
      {children}
    </Context.Provider>
  )
}