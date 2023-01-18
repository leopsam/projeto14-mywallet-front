import styled from "styled-components"
import { Context } from "../contexts/Context"
import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export default function Home(){    
    const { setToken, inputAtivo, inputDesbotado } = useContext(Context) 
    const navigate = useNavigate()

    function home(e) {
        /*e.preventDefault() 
        //setTextoBotao(botaoLoading) 
        setDesabilitado("disabled")      
        const body = { email, senha }
        const url = "http://localhost:5000/mywalletdb/users"
    
        const promise = axios.post(url, body)
        promise.then((res) => { 
            setToken(res.data.token)
            console.log()
            //setUserImage(res.data.image)
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("senha", res.data.password);
            localStorage.setItem("token", res.data.token);
            navigate("/home") 
        })

        promise.catch(err => { 
            setTextoBotao("Entrar") 
            setDesabilitado("")            
            alert(err.response.data.message) 
            console.log(err)          
        })*/
      }  

    return(
        <ContainerHome>
            <Header>
                <h1>Olá, Fulano</h1>
                <button><ion-icon name="log-out-outline"></ion-icon></button>
            </Header>           
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
    height: 100vh;
`
const Header = styled.header`
    display: flex;   
    align-items: center;
`