import React from 'react'
import {useState} from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import {editUser} from '../action/editUser'


export const EditUser = (props) => {

  const [isOpen, setIsOpen] = useState(false)
  const [bankName, setBankName] = useState(props.user.bankname)
  const [interestRate, setInterestRate] = useState(props.user.interest_rate)
  const [maxLoan, setMaxLoan] = useState(props.user.max_loan)
  const [downPayment, setDownPayment] = useState(props.user.down_payment)
  const [termLoan, setTermLoan] = useState(props.user.loan_term)

  const editId = props.user.id
  const dispatch = useDispatch()

  const editHandler = (e) => {
      e.preventDefault()

      if ( Number(interestRate) > 0 
      && Number(maxLoan) > 0 
      && Number(downPayment) > 0
      && Number(termLoan) > 0
      ) {
        dispatch(editUser(bankName, interestRate, maxLoan, downPayment, termLoan, editId))
        setIsOpen(false)
      } else {
      console.log('error!!!!!!!!!!')
      alert('Enter the correct amount in a numerical value')
      }   
  }


return (  
    <React.Fragment>
      <button className="edit" onClick={() => setIsOpen(true)}>
          Edit
      </button>

      {isOpen && (
        <div className='modal'>
          <div className='modal-body'>
            <h1>Edit Bank</h1>       
            <form onSubmit={editHandler}> 
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
                <button type="submit">Edit Bank</button>
            </form>  
            <br/>
            <button onClick={() => setIsOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  )     
}


EditUser.propTypes = {
  //props: PropTypes.object.isRequired
  props: PropTypes.object
} 


