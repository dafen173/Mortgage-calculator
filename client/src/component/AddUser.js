import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {addUsers} from "../action/addUsers"


export const AddUser = () => {
    const [bankName, setBankName] = useState('')
    const [interestRate, setInterestRate] = useState('')
    const [maxLoan, setMaxLoan] = useState('')
    const [downPayment, setDownPayment] = useState('')
    const [termLoan, setTermLoan] = useState('')   

    const dispatchUsers = useDispatch()

    const callBackHandler = (event) => {
        event.preventDefault()

        if ( Number(interestRate) > 0 
        && Number(maxLoan) > 0 
        && Number(downPayment) > 0
        && Number(termLoan) > 0
        ) {
            dispatchUsers(addUsers(bankName, interestRate, maxLoan, downPayment, termLoan))
            setBankName('')
            setInterestRate('')
            setMaxLoan('')
            setDownPayment('')
            setTermLoan('')
        } else {
        console.log('error!!!!!!!!!!')
        alert('Enter the correct amount in a numerical value')
        }  
    }

    return (
        <>           
            <form onSubmit={callBackHandler}>               
                <label>
                    Bank name
                    <br/>
                    <input value={bankName} onChange={ e => setBankName(e.target.value)} />
                </label>
                <br/>
                <br/>
                <label>
                    Interest rate, %
                    <br/>
                    <input value={interestRate} onChange={ e => setInterestRate(e.target.value)} />
                </label>
                <br/>
                <br/>
                <label>
                    Maximum loan, $
                    <br/>
                    <input value={maxLoan} onChange={ e => setMaxLoan(e.target.value)} />
                </label>
                <br/>
                <br/>
                <label>
                    Minimum down payment, $
                    <br/>
                    <input value={downPayment} onChange={ e => setDownPayment(e.target.value)} />
                </label>
                <br/>
                <br/>
                <label>
                    Loan term, months
                    <br/>
                    <input value={termLoan} onChange={ e => setTermLoan(e.target.value)} />
                </label>
                <br/>
                <br/>    
                <button type="submit">Add Bank</button>
            </form>          
        </>
    )
}



