import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../action/getUsers'


export const GroupsPage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    
    const groupNameSelector = useSelector(state => state.users.items)

    const [initialLoan, setInitialLoan] = useState('')
    const [downPay, setDownPay] = useState('')
    const [bankValue, setBankValue] = useState('')
    const [res, setRes] = useState(null)

    const callBackHandler = (event) => {
        event.preventDefault()

        const selectedBank = groupNameSelector.find(el => el.bankname === bankValue)
        console.log(selectedBank.interest_rate)
        
        const afterDownpay =  initialLoan - downPay
        const numerator = afterDownpay * selectedBank.interest_rate/12 * ( Math.pow( 1 + selectedBank.interest_rate/12, selectedBank.loan_term ) )
        const denominator = ( Math.pow( 1 + selectedBank.interest_rate/12, selectedBank.loan_term ) ) - 1
        const resHandler = numerator / denominator
        const selectedBankDownPay = (initialLoan / 100) * selectedBank.down_payment
        console.log('selectedBankDownPay: ' + selectedBankDownPay)

        if (Number(initialLoan) > selectedBank.max_loan) {
            alert('The entered initial loan amount is greater than the allowable limit for the selected bank!')
        } else if (Number(downPay) < selectedBankDownPay ) {
            console.log('bad downpay!!!!!!!!!!')
            alert('The entered amount of the first payment is less than the allowable limit of the selected bank!')
        } else if ( Number(initialLoan) > 0 
                    && Number(downPay) > 0 
                    && Number(downPay) >= selectedBankDownPay
                  ) {
                        setRes(Math.ceil(resHandler))
                        console.log('result is: ' + res)
        } else {
            console.log('bad!!!!!!!!!!')
            alert('Enter the correct amount in a numerical value')
        }
    }


    return (
        <div className="wrapper">         
            <h1>Mortgage Page</h1>  

            <form onSubmit={callBackHandler}> 
                <label>
                    Initial loan, $
                    <br/>
                    <input value={initialLoan} onChange={ e => setInitialLoan(e.target.value)} />
                </label>
                <br/>
                <br/>
                <label>
                    Down payment, $
                    <br/>
                    <input value={downPay} onChange={ e => setDownPay(e.target.value)} />
                </label>
                <br/>
                <br/>                        
                    <label htmlFor="bank-select">Choose a bank:</label>
                    <br/> 
                    <select id='bank-select' value={bankValue} onChange={ e => setBankValue(e.target.value)}>
                        <option value="">--Please choose a bank--</option>
                        {groupNameSelector.map( item => 
                            <option key={item.id} value={item.bankname}>{item.bankname}</option>                                                                            
                        )}
                    </select>             
                <br/>
                <br/>  

                <button type="submit">Get Result</button>
            </form>    

            {res ? (
            <h1>{'your monthly payment: $' + res}</h1>  
            ) : (
            <h1>No result!!!</h1>  
            )}
           
        </div>
    )
}


