import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../action/getUsers'
import UserItem from "./UserItem"


const UserList = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const userSelector = useSelector(state => state.users.items)
    // console.log(userSelector[0])

    return (
        <div>
            {userSelector.map( (item, index) => 
                    <UserItem 
                        user={item} 
                        key={item.id} 
                        index={index} 
                    />
            )}
        </div>      
    )
}


export default UserList