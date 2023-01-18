import styled from "styled-components"
import { Context } from "../contexts/Context"
import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export default function In(){
    const [valor, setValor] = useState("")
    const [descricao, setDescricao] = useState("")    
    
    const [desabilitado, setDesabilitado] = useState("")
    const [textoBotao, setTextoBotao] = useState("Cadastrar")
    const { setToken, inputAtivo, inputDesbotado } = useContext(Context) 
    const navigate = useNavigate()
return(
    <ContainerIn>          
        <FormIn>
        <TitleIn>Nova entrada</TitleIn>
            <Input
                //data-test="name"
                id="valor"
                type="text"
                placeholder="Valor"
                value={valor}
                onChange={e => setValor(e.target.value)} 
                disabled={desabilitado}
                corFundo={desabilitado ? inputDesbotado : inputAtivo }
                required
            />
            <Input
                //data-test="email"
                id="descricao"
                type="text"
                placeholder="Descrição"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                disabled={desabilitado}
                corFundo={desabilitado ? inputDesbotado : inputAtivo } 
                required
            />
            <Button data-test="sing-up-submit" disabled={desabilitado} type="submit">Salvar entrada</Button>                
        </FormIn>
    </ContainerIn>
)
}
const ContainerIn = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
`
const TitleIn = styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    align-items: flex-end;
    width: 100%;
    margin: 10px 0 30px;
`
const FormIn = styled.form`
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