export const addUsers = (bankName, interestRate, maxLoan, downPayment, termLoan) => {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8080/api/banks', {
                    method: 'POST',      
                    body: JSON.stringify({
                    bankname: bankName, 
                    interest_rate: interestRate,
                    max_loan: maxLoan,
                    down_payment: downPayment,
                    loan_term: termLoan


                    //created: new Date().toLocaleDateString()
                    }),
                    headers: {
                    'Content-Type': 'application/json'
                    }
                })
                const json = await response.json()
                dispatch({type: 'ADD_USER', payload: json })
          } catch (e) {
            console.warn('Error: ', e.message)
            alert('Error: ' + e.message)
          }
    }
}


// export const addUsers = (userValue, groupValue, groupId) => {
//     return async dispatch => {
//         const response = await fetch('http://localhost:8080/api/manage-user', {
//             method: 'POST',      
//             body: JSON.stringify({
//             username: userValue, 
//             groupname: groupValue,
//             group_id: groupId,
//             created: new Date().toLocaleDateString()
//             }),
//             headers: {
//             'Content-Type': 'application/json'
//             }
//         })
//         const json = await response.json()
//         dispatch({type: 'ADD_USER', payload: json })
//     }
// }
