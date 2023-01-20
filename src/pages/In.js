import styled from "styled-components"
import axios from "axios"
import { MyWalletContext } from "../contexts/MyWalletContext"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Bars } from 'react-loader-spinner'

export default function In(){   
    const [valor, setValor] = useState("")
    const [descricao, setDescricao] = useState("")
    const [desabilitado, setDesabilitado] = useState("")
    const [textoBotao, setTextoBotao] = useState("Salvar entrada")
    const { token, inputAtivo, inputDesbotado } = useContext(MyWalletContext) 
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

    function novaEntrada(e) {
        e.preventDefault() 
        setTextoBotao(botaoLoading) 
        setDesabilitado("disabled") 

        const REACT_APP_API_URL = "http://localhost:5000/nova-entrada"
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const body = { valor, descricao }
        const url = REACT_APP_API_URL
    
        const promise = axios.post(url, body, config)
        promise.then((res) => { 
            alert("Cadastro realizado!")
            navigate("/home") 
        })

        promise.catch(err => { 
            setTextoBotao("Salvar entrada") 
            setDesabilitado("")            
            alert(err.message) 
            console.log(err)          
        })
    }  

    return(
        <ContainerIn>          
            <FormIn onSubmit={novaEntrada}>
            <TitleIn>Nova entrada</TitleIn>
                <Input
                    data-test="registry-amount-input"
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
                    data-test="registry-name-input"
                    id="descricao"
                    type="text"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo } 
                    required
                />
                <Button data-test="registry-save" disabled={desabilitado} type="submit">{textoBotao}</Button>                
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
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
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