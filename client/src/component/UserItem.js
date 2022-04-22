import React from "react"
import PropTypes from "prop-types"
import DeleteUser from "./DeleteUser"
import {EditUser} from './EditUser'

const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 2rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
    },
    input: {
      marginRight: '1rem'
    }
  }

function UserItem ( {user, index} ) {

    return (
        <li style={styles.li}>
            <span>            
                <strong>{index + 1}</strong>
                &nbsp;
                &nbsp;
                &nbsp;
                {user.bankname}  
                &nbsp;
                &nbsp;
                &nbsp;
                {user.interest_rate + '%'} 
                &nbsp;
                &nbsp;
                &nbsp;
                {'$' + user.max_loan}
                &nbsp;
                &nbsp;
                &nbsp;
                {user.down_payment + '%'} 
                &nbsp;
                &nbsp;
                &nbsp;
                {user.loan_term + ' months'} 
            </span>   
            <div>
              <EditUser user={user}/>
              <DeleteUser user={user}/>  
            </div>                    
        </li>
    )
}


UserItem.propTypes = {
    user: PropTypes.object.isRequired,
    index: PropTypes.number
} 

export default UserItem

      
