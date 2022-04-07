import React from 'react'
import { useDispatch } from "react-redux"
import {removeUser} from '../action/removeUser'

function DeleteUser (props) {
  const dispatch = useDispatch()
  const deleteId = props.todo.id
  //const groupId = props.group.id

  function deleteHandler () {
    console.log(deleteId)
    //console.log(groupId)
    dispatch(removeUser(deleteId))
  }
  return (  
    <React.Fragment>
      <button className="rm" onClick={deleteHandler}>
          Delete
      </button>   
    </React.Fragment>
  )     
}
    
export default DeleteUser


