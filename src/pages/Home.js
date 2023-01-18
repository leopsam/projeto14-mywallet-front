import styled from "styled-components"
import { Context } from "../contexts/Context"
import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import logout from "../assets/logout.svg"
import minus from "../assets/minus.svg"
import plus from "../assets/plus.svg"

export default function Home(){    
    const { setToken, inputAtivo, inputDesbotado } = useContext(Context)
    const red = "#C70000"
    const green = "#03AC00"

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
                <img src={logout} alt="Logout"/>
            </Header>  
            <Wallet>
                <h2>Não há registros de entrada ou saída</h2>
                <ContentWallet>
                    <h4><span>30/11</span>&nbsp; Almoço mãe</h4>
                    <p>39,90</p>
                </ContentWallet>
                <ContentWallet>
                    <h4><span>30/11</span>&nbsp; Almoço mãe</h4>
                    <p>39,90</p>
                </ContentWallet>
                <ContentWallet>
                    <h4><span>30/11</span>&nbsp; Almoço mãe</h4>
                    <p>39,90</p>
                </ContentWallet>
                <ContentWallet>
                    <h4><span>30/11</span>&nbsp; Almoço mãe</h4>
                    <p>39,90</p>
                </ContentWallet>
                <ContentWallet>
                    <h4><span>30/11</span>&nbsp; Almoço mãe</h4>
                    <p>39,90</p>
                </ContentWallet>
                <ContentWallet>
                    <h4><span>30/11</span>&nbsp; Almoço mãe</h4>
                    <p>39,90</p>
                </ContentWallet>
                <BalanceWallet>
                    <h4>SALDO</h4>
                    <p>2849,96</p>
                </BalanceWallet> 
            </Wallet> 
            <Buttons>
                <WalletButton>
                    <img src={plus} alt="Entrada"/>
                    <h3>Nova entrada</h3>
                </WalletButton>
                <WalletButton>
                    <img src={minus} alt="Saída"/>
                    <h3>Nova saída</h3>
                </WalletButton> 
                          
            </Buttons>        
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
`
const Header = styled.header`
    display: flex;   
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;

    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    img{
        height: 24px;
        width: 23px;
    }
`
const Wallet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-top: 20px;
    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
        width: 60%;
        margin: auto 0;
        display: none; //não mostrar msg de carteira vazia
    }
`
const ContentWallet = styled.div`   
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin: 10px 0;
    h4{        
        color: #000000; 
    }
    span{
        color: #C6C6C6;
    }
    p{
        color: red;
    }
`
const BalanceWallet = styled.div`   
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    padding: 10px;
    h4{ 
        color: #000000;
    }    
    p{
        font-weight: 400;
        color: #03AC00;
    }
`
const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
`
const WalletButton = styled.div`   
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    img{
        width: 25px;
        height: 25px;
    }   
    h3{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        width: 50%;
    }    
`