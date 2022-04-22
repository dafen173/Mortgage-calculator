export const removeUser = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(`http://localhost:8080/api/banks/${id}`, {
                method: 'DELETE'
            }) 
            const json = await response.json()
            dispatch({type: 'DELETE_USER', payload: json })
        } catch (e) {
            console.warn('Error: ', e.message)
            alert('Error: ' + e.message)
        }
    }
}



// export const removeUser = (id) => {
//     return async dispatch => {
//         const response = await fetch(`http://localhost:8080/api/manage-user/${id}`, {
//               method: 'DELETE'
//             }) 
//         const json = await response.json()
//         dispatch({type: 'DELETE_USER', payload: json })
//     }
// }


