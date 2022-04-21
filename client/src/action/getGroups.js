export const getGroups = () => {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8080/api/manage-group')
            const json = await response.json()
            dispatch({type: 'GET_GROUPS', payload: json })
        } catch (e) {
          console.warn('Error: ', e.message)
        //   alert('Error: ' + e.message)
        }
    }
}



// export const getGroups = () => {
//     return async dispatch => {
//         const response = await fetch('http://localhost:8080/api/manage-group')
//         const json = await response.json()
//         dispatch({type: 'GET_GROUPS', payload: json })
//     }
// }


