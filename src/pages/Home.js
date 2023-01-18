import styled from "styled-components"
import { Context } from "../contexts/Context"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import logout from "../assets/logout.svg"
import minus from "../assets/minus.svg"
import plus from "../assets/plus.svg"

export default function Home(){ 
    const REACT_APP_API_URL = "http://localhost:5000/mywalletdb/users"   
    const { token, setToken, count, setCount } = useContext(Context)
    const red = "#C70000"
    const green = "#03AC00"

    const navigate = useNavigate()

    useEffect(() => {
        const url = REACT_APP_API_URL    
        const config = { headers: { Authorization: `Bearer ${token}` } }    
        const promise = axios.get(url, config) 

        promise.then(res => {            
            console.log(res.response.data)        
        })        
        promise.catch((err) => {
            console.log(err.response.data)
        })    
    }, [count])   

    return(
        <ContainerHome>
            <Header>
                <h1 data-test="user-name">Olá, Fulano</h1>
                <img data-test="logout" src={logout} alt="Logout"/>
            </Header>  
            <Wallet>
                <h2>Não há registros de entrada ou saída</h2>
                <ContentWallet>
                    <h4 data-test="registry-name"><span>30/11</span>&nbsp; Almoço mãe</h4>
                    <p data-test="registry-amount">39,90</p>
                </ContentWallet>
               
                <BalanceWallet>
                    <h4>SALDO</h4>
                    <p data-test="total-amount">2849,96</p>
                </BalanceWallet> 
            </Wallet> 
            <Buttons>
                <WalletButton>
                    <LinkOutIn>
                        <Link data-test="new-income" to={`/nova-entrada`}>
                            <img src={plus} alt="Entrada"/>
                            <h3>Nova entrada</h3>
                        </Link> 
                    </LinkOutIn>
                </WalletButton>
                <WalletButton>
                    <LinkOutIn>
                        <Link data-test="new-expense" to={`/nova-saida`}>
                            <img src={minus} alt="Saída"/>
                            <h3>Nova saída</h3>
                        </Link> 
                    </LinkOutIn>
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
const LinkOutIn = styled.div`   
    width: 100%;
    height: 100%;
    a{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
        text-decoration: none;
    }
       
`