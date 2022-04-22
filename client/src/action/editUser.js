export const editUser = (bankName, interestRate, maxLoan, downPayment, termLoan, id) => {
    return async dispatch => {
        try {
            const response = await fetch(`http://localhost:8080/api/banks/${id}`, {
                    method: 'PUT',      
                    body: JSON.stringify({

                    bankname: bankName, 
                    interest_rate: interestRate,
                    max_loan: maxLoan,
                    down_payment: downPayment,
                    loan_term: termLoan,
                    id: id
                    
                    }),
                    headers: {
                    'Content-Type': 'application/json'
                    }
                })
                const json = await response.json()
                dispatch({type: 'EDIT_USER', payload: json })
        } catch (e) {
          console.warn('Error: ', e.message)
          alert('Error: ' + e.message)
        }
    }
}



// export const editUser = (userValue, groupValue, id) => {
//     return async dispatch => {
//         try {
//             const response = await fetch(`http://localhost:8080/api/manage-user/${id}`, {
//                     method: 'PUT',      
//                     body: JSON.stringify({
//                     username: userValue, 
//                     groupname: groupValue,
//                     id: id
//                     }),
//                     headers: {
//                     'Content-Type': 'application/json'
//                     }
//                 })
//                 const json = await response.json()
//                 dispatch({type: 'EDIT_USER', payload: json })
//         } catch (e) {
//           console.warn('Error: ', e.message)
//           alert('Error: ' + e.message)
//         }
//     }
// }
