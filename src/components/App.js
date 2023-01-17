import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<SignIn />} />
        <Route path="/cadastro" element={<SignUp />} />
      </Routes> 
  </BrowserRouter>
  )
}