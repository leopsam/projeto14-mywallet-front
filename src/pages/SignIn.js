import styled from "styled-components"
import { Context } from "../contexts/Context"
import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export default function SignIn(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [desabilitado, setDesabilitado] = useState("")
    const [textoBotao, setTextoBotao] = useState("Entrar")
    const { setToken, inputAtivo, inputDesbotado } = useContext(Context) 
    const navigate = useNavigate()

    function loginUser(e) {
        e.preventDefault() 
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
        })
      }  

    return(
        <ContainerLogin>
       <TitleBody>My Wallet</TitleBody>
       <FormLogin onSubmit={loginUser}>
                <Input
                    //data-test="email-input"
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
                    //data-test="password-input"
                    id="password"
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo } 
                    required
                />
                <Button /*data-test="login-btn"*/ disabled={desabilitado} type="submit">{textoBotao}</Button>                
            </FormLogin>
            <LinkSignUp>
                <Link /*data-test="signup-link"*/ to={`/cadastro`}>
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
    ::placeholder{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding-left: 10px;     
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
