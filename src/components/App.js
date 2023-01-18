import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Home from "../pages/Home"
import Out from "../pages/Out"
import In from "../pages/In"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<SignIn />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nova-entrada" element={<In />} />
        <Route path="/nova-saida" element={<Out />} />
      </Routes> 
  </BrowserRouter>
  )
}