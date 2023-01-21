import { createContext, useState } from 'react'

export const MyWalletContext = createContext({})

export function UserProvider( {children} ) {
  const [userName, setUserName] = useState("")
  const [userId, setUserId] = useState("")
  const [token, setToken] = useState()
  const [count, setCount] = useState(2) 
  const [wallet, setWallet] = useState(undefined)
  const [Put, setPut] = useState()
  
  const inputDesbotado = "#F2F2F2"
  const inputAtivo = "#FFFFFF"

  return (
    <MyWalletContext.Provider value={{
        token,
        setToken,
        userName,
        setUserName,
        inputDesbotado,
        inputAtivo,
        count,
        setCount,
        wallet,
        setWallet,
        userId,
        setUserId,
        Put,
        setPut
    }}>
      {children}
    </MyWalletContext.Provider>
  )
}