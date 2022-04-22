import React, {useState, useEffect} from 'react'
import { AddGroup } from '../component/AddGroup'
import {GroupsList} from '../component/GroupsList'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../action/getUsers'
import { number } from 'prop-types'

// export const GroupsPage = () => {
//     return (
//         <div className="wrapper">         
//             <h1>Mortgage Page</h1>  
//             <GroupsList />
//             <AddGroup/>       
//         </div>
//     )
// }


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

    // useEffect(() => {
    //     if (groupNameSelector.length)
    //     //setBankValue(groupNameSelector[0].bankname)

    //     console.log(groupNameSelector[0].bankname)
    //     setBankValue(groupNameSelector[0].bankname)
    //  }, [groupNameSelector])

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


        // if ( Number(initialLoan) > 0 
        //     && Number(downPay) > 0 
        //     //&& Number(downPay) < selectedBank.interest_rate 
        //     ) {
        //     //console.log(afterDownpay)
        //     setRes(Math.ceil(resHandler))
        //     console.log('result is: ' + res)
        // } 
        
        
        // if (Number(downPay) < selectedBankDownPay ) {
        //     console.log('bad downpay!!!!!!!!!!')
        //     alert('The entered amount of the first payment is less than the allowable limit of the selected bank!')
        
        if (Number(initialLoan) > selectedBank.max_loan) {
            alert('The entered initial loan amount is greater than the allowable limit for the selected bank!')

        } else if (Number(downPay) < selectedBankDownPay ) {
            console.log('bad downpay!!!!!!!!!!')
            alert('The entered amount of the first payment is less than the allowable limit of the selected bank!')
        } else if ( Number(initialLoan) > 0 
                    && Number(downPay) > 0 
                    && Number(downPay) >= selectedBankDownPay
                  ) {
                        //console.log(afterDownpay)
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
            {/* <GroupsList />
            <AddGroup/>     */}

            <form onSubmit={callBackHandler}> 
                {/* <input value={userValue} onChange={ e => setUserValue(e.target.value)} /> */}
                {/* <select value={groupValue} onChange={ e => setGroupValue(e.target.value)}>
                    {groupNameSelector.map( item => 
                        <option key={item.id} value={item.groupname}>{item.groupname}</option> 
                        // <option key={item.id} value={item.groupname} data={item.id}>{item.groupname}</option>                                                 
                    )}
                </select>                     */}
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



            {/* {todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo} />
            ) : loading ? null : (
            <p>No todos!</p>
            )} */}


            {res ? (
            <h1>{'your monthly payment: ' + res}</h1>  
            ) : (
            <h1>No result!!!</h1>  
            )}

             
        </div>
    )
}


