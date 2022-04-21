import React, {useState, useEffect, useLayoutEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUsers } from "../action/addUsers"
import { getGroups } from "../action/getGroups"


export const AddUser = () => {
    
    // const dispatchGroups = useDispatch()
    // useEffect(() => {
    //     dispatchGroups(getGroups())
    // }, [])
    
    const groupNameSelector = useSelector(state => state.groups.groupitems)
 
    // const [userValue, setUserValue] = useState('')
    // const [groupValue, setGroupValue] = useState('')

    const [bankName, setBankName] = useState('')
    const [interestRate, setInterestRate] = useState('')
    const [maxLoan, setMaxLoan] = useState('')
    const [downPayment, setDownPayment] = useState('')
    const [termLoan, setTermLoan] = useState('')

    // useEffect(() => {
    //     if (groupNameSelector.length)
    //     setGroupValue(groupNameSelector[0].groupname)
    //  }, [groupNameSelector])
    

    const dispatchUsers = useDispatch()

    const callBackHandler = (event) => {
        event.preventDefault()

        //const selectedGroup = groupNameSelector.find(el => el.groupname === groupValue)
        // console.log(selectedGroup.id)
        
        //dispatchUsers(addUsers(userValue, groupValue, selectedGroup.id))
        dispatchUsers(addUsers(bankName, interestRate, maxLoan, downPayment, termLoan))
        
        
        //setUserValue('')
        //console.log('groupValue is ' + groupValue)

        setBankName('')
        setInterestRate('')
        setMaxLoan('')
        setDownPayment('')
        setTermLoan('')

    }

    return (
        <>           
            <form onSubmit={callBackHandler}> 
                {/* <input value={userValue} onChange={ e => setUserValue(e.target.value)} /> */}
                {/* <select value={groupValue} onChange={ e => setGroupValue(e.target.value)}>
                    {groupNameSelector.map( item => 
                        <option key={item.id} value={item.groupname}>{item.groupname}</option> 
                        // <option key={item.id} value={item.groupname} data={item.id}>{item.groupname}</option>                                                 
                    )}
                </select>                     */}
                <label>
                    Bank name
                    <br/>
                    <input value={bankName} onChange={ e => setBankName(e.target.value)} />
                </label>
                <br/>
                <br/>
                <label>
                    Interest rate
                    <br/>
                    <input value={interestRate} onChange={ e => setInterestRate(e.target.value)} />
                </label>
                <br/>
                <br/>
                <label>
                    Maximum loan
                    <br/>
                    <input value={maxLoan} onChange={ e => setMaxLoan(e.target.value)} />
                </label>
                <br/>
                <br/>
                <label>
                    Minimum down payment
                    <br/>
                    <input value={downPayment} onChange={ e => setDownPayment(e.target.value)} />
                </label>
                <br/>
                <br/>
                <label>
                    Loan term
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



