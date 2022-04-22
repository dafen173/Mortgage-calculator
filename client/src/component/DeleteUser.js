import React from 'react'
import { useDispatch } from "react-redux"
import {removeUser} from '../action/removeUser'
import PropTypes from "prop-types"

const DeleteUser = (props) => {
  const dispatch = useDispatch()
  const deleteId = props.user.id

  function deleteHandler () {
    //console.log(deleteId)
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
    
DeleteUser.propTypes = {
  //props: PropTypes.object.isRequired
  props: PropTypes.object
} 



export default DeleteUser


