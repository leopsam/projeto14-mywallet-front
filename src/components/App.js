import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Home from "../pages/Home"
import Out from "../pages/Out"
import In from "../pages/In"
import UpIn from "../pages/UpIn"
import UpOut from "../pages/UpOut"
import { UserProvider } from "../contexts/MyWalletContext";

export default function App() {
  return (
    <BrowserRouter>
    <UserProvider>
        <Routes>      
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<In />} />
          <Route path="/nova-saida" element={<Out />} />
          <Route path="/editar-entrada" element={<UpIn />} />
          <Route path="/editar-saida" element={<UpOut />} />
        </Routes> 
      </UserProvider>
  </BrowserRouter>
  )
}