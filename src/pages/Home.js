import styled from "styled-components"
import axios from "axios"
import logoutImg from "../assets/logout.svg"
import minus from "../assets/minus.svg"
import plus from "../assets/plus.svg"
import { useEffect, useContext, useState } from "react"
import { MyWalletContext } from "../contexts/MyWalletContext"
import { useNavigate, Link } from "react-router-dom"
import { ProgressBar } from 'react-loader-spinner'

export default function Home(){      
    const { token, wallet, setWallet, count, setCount, userName, setIdPut } = useContext(MyWalletContext)
    const [calc, setCalc] = useState(undefined)       
    const red = "#C70000"
    const green = "#03AC00"
    const navigate = useNavigate() 
    const load = <ProgressBar
        height="150"
        width="150"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#FFFFFF'
        barColor = {'#51E5FF'}
    />

    useEffect(() => {
        const REACT_APP_API_URL = "http://localhost:5000/home" 
        const url = REACT_APP_API_URL    
        const config = { headers: { Authorization: `Bearer ${token}` } }     
        const promise = axios.get(url, config) 

        promise.then(res => {          
            setWallet(res.data) 
        }) 

        promise.catch((err) => {
            console.log(err.message)
        })        
    }, [count])

    useEffect(() => {
        const REACT_APP_API_URL = "http://localhost:5000/calculo" 
        const url = REACT_APP_API_URL    
        const config = { headers: { Authorization: `Bearer ${token}` } }     
        const promise = axios.get(url, config) 

        promise.then(res => {          
            setCalc(res.data)                
        }) 

        promise.catch((err) => {
            console.log(err.message)
        })        
    }, [count])

    function deletaItem(id, descricao){
        if(window.confirm(`Excluir ${descricao}?`)) {
            const REACT_APP_API_URL = `http://localhost:5000/deletar-item/${id}` 
            const url = REACT_APP_API_URL     
            const promise = axios.delete(url) 

            promise.then(res => {  
                console.log(res)
                setWallet(undefined)
                setCalc(undefined)
                setCount(count+1)              
            }) 

            promise.catch((err) => {
                console.log(err)
                console.log(id)
            }) 
        }        
    }

    function logout(){
        const REACT_APP_API_URL = `http://localhost:5000/logout/${token}` 
        const url = REACT_APP_API_URL     
        const promise = axios.delete(url) 

        promise.then(res => {  
            setWallet(undefined)
            setCalc(undefined)
            navigate("/")              
        }) 

        promise.catch((err) => {
            console.log(err)
        }) 
              
    }

    function editarItem(id, status){
        console.log("clicou " + status)
        setIdPut(id)
        if(status === "in"){            
            navigate("/editar-entrada")
        } else if(status === "out"){
            navigate("/editar-saida")
        }
    }

    if(wallet === undefined && calc === undefined ) {
        return <Load>{load}</Load>;
    }

    return(
        <ContainerHome>
            <Header>
                <h1 data-test="user-name">Olá, {userName}</h1>
                <img data-test="logout" src={logoutImg} onClick={()=>(logout())} alt="Logout"/>
            </Header>  
            <Wallet>   
                {wallet.length === 0 ? 
                    <MsgWallet>
                        <h2>Não há registros de entrada ou saída</h2> 
                    </MsgWallet>
                :   
                    <>
                        {wallet.map((w) =>(
                            <ContentWallet key={w._id} corValor={w.status === "out" ? red : green }>                        
                                    <h4 data-test="registry-name" onClick={()=>(editarItem(w._id, w.status))}><span>{w.date}</span>&nbsp; {w.descricao}</h4>                        
                                    <p data-test="registry-amount">{w.valor}<span data-test="registry-delete" onClick={()=>(deletaItem(w._id, w.descricao))}>&nbsp;&nbsp; x</span></p>
                            </ContentWallet>                    
                        ))} 
                    </> 
                }               
                <BalanceWallet corTexto={(Math.sign(calc) === -1) ? red : green}>
                    <h4>SALDO</h4>
                    <p data-test="total-amount">{calc}</p>
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

const Load = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 20px;
`
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
`
const MsgWallet = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;    
    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
        width: 60%;
        justify-content: flex-end;
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
        color: ${props => props.corValor};
    }
    h5{
        color: #C6C6C6;
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
        color: ${props => props.corTexto};
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