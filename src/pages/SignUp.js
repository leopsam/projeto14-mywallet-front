import styled from "styled-components"
import { Context } from "../contexts/Context"
import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export default function SignUp(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmeSenha, setConfirmeSenha] = useState("")
    
    const [desabilitado, setDesabilitado] = useState("")
    const [textoBotao, setTextoBotao] = useState("Cadastrar")
    const { setToken, inputAtivo, inputDesbotado } = useContext(Context) 
    const navigate = useNavigate()

    function cadastrarUser(e) {
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
        <ContainerCadastro>
            <TitleBody>My Wallet</TitleBody>
            <FormLogin onSubmit={cadastrarUser}>
                <Input
                    data-test="name"
                    id="name"
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)} 
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
                    id="senha"
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo } 
                    required
                />
                <Input
                    data-test="conf-password"
                    id="confirmeSenha"
                    type="password"
                    placeholder="Confirme a senha"
                    value={confirmeSenha}
                    onChange={e => setConfirmeSenha(e.target.value)}
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