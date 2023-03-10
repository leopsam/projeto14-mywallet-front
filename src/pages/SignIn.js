import styled from "styled-components"
import axios from "axios"
import { MyWalletContext } from "../contexts/MyWalletContext"
import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Bars } from 'react-loader-spinner'

export default function SignIn(){    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [desabilitado, setDesabilitado] = useState("")
    const [textoBotao, setTextoBotao] = useState("Entrar")
    const { setToken, inputAtivo, inputDesbotado, setUserName, setUserId } = useContext(MyWalletContext) 
    const navigate = useNavigate()
    const botaoLoading = <Bars 
        height="30" 
        width="80" 
        radius="9"
        color="#ffffff" 
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}    
    />   

    function loginUser(e) {
        e.preventDefault() 
        setTextoBotao(botaoLoading) 
        setDesabilitado("disabled") 

        const REACT_APP_API_URL = "https://mywallet-api-x1as.onrender.com/login"
        const body = { email, password }
        const url = REACT_APP_API_URL    
        const promise = axios.post(url, body)

        promise.then((res) => {
            setToken(res.data.token) 
            setUserName(res.data.name) 
            setUserId(res.data.userId)              
            console.log("Logado com sucesso")            
            navigate("/home") 
        })

        promise.catch(err => { 
            setTextoBotao("Entrar") 
            setDesabilitado("")            
            alert("E-mail ou senha inválida") 
            console.log(err.message)         
        })
      }  

    return(
        <ContainerLogin>
            <TitleBody>My Wallet</TitleBody>
            <FormLogin onSubmit={loginUser}>
                <Input
                    data-test="email"
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo }
                    required
                />
                <Input
                    data-test="password"
                    id="password"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo } 
                    required
                />
                <Button data-test="sign-in-submit" disabled={desabilitado} type="submit">{textoBotao}</Button>                
            </FormLogin>
            <LinkSignUp>
                <Link to={`/cadastro`}>
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>                
            </LinkSignUp>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const TitleBody = styled.h1`
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`
const FormLogin = styled.form`
    display: flex;   
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    margin: 15px 0;
`
const Input = styled.input`
    box-sizing: border-box;
    width: 326px;
    height: 58px;
    background-color: ${props => props.corFundo};
    border: none;
    border-radius: 5px;
    margin: 5px 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 10px;
    ::placeholder{        
        color: #000000;    
    }
`
const Button = styled.button`
    width: 326px;
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
`
const LinkSignUp = styled.div`
    margin-top: 20px;    
   p{    
        text-decoration: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
   }
   a{
        text-decoration: none;
   }
`