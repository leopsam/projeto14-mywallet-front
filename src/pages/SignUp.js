import styled from "styled-components"
import axios from "axios"
import { MyWalletContext } from "../contexts/MyWalletContext"
import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Bars } from 'react-loader-spinner'

export default function SignUp(){    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")    
    const [desabilitado, setDesabilitado] = useState("")
    const [textoBotao, setTextoBotao] = useState("Cadastrar")
    const { inputAtivo, inputDesbotado } = useContext(MyWalletContext) 
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

    function cadastrarUser(e) {
        e.preventDefault() 
        setTextoBotao(botaoLoading) 
        setDesabilitado("disabled") 

        const REACT_APP_API_URL = "http://localhost:5000/cadastro"
        const body = { name, email, password, confPassword }
        const url = REACT_APP_API_URL    
        const promise = axios.post(url, body)

        promise.then((res) => { 
            alert("Cadastro realizado!")
            navigate("/") 
        })

        promise.catch(err => { 
            setTextoBotao("Cadastrar") 
            setDesabilitado("")            
            alert(err.response.data) 
            console.log(err)          
        })
    }  

    return(
        <ContainerCadastro>
            <TitleBody>My Wallet</TitleBody>
            <FormLogin onSubmit={cadastrarUser}>
                <Input
                    data-test="name"
                    id="name"
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo }
                    required
                />
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
                <Input
                    data-test="conf-password"
                    id="confirmeSenha"
                    type="password"
                    placeholder="Confirme a senha"
                    value={confPassword}
                    onChange={e => setConfPassword(e.target.value)}
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo } 
                    required
                />
                <Button data-test="sing-up-submit" disabled={desabilitado} type="submit">{textoBotao}</Button>                
            </FormLogin>
            <LinkSignUp>
                <Link to={`/`}>
                    <p>Já tem uma conta? Entre agora!</p>
                </Link>                
            </LinkSignUp>
        </ContainerCadastro>
    )
}

const ContainerCadastro = styled.div`
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
    :active{
        background-color: #bf89d6;
    }
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