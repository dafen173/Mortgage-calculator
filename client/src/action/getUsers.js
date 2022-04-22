export const getUsers = () => {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8080/api/banks')
            const json = await response.json()
            dispatch({type: 'GET_USERS', payload: json })
        } catch (e) {
          console.warn('Error: ', e.message)
          alert('Error: ' + e.message)
        }
    }
}



// export const getUsers = () => {
//     return async dispatch => {
//         const response = await fetch('http://localhost:8080/api/manage-user')
//         const json = await response.json()
//         dispatch({type: 'GET_USERS', payload: json })
//     }
// }


//https://jsonplaceholder.typicode.com/posts?_limit=5


