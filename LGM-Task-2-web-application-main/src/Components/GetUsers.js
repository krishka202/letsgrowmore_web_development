import React,{useState} from 'react';
import ShowUsers from './ShowUsers';
export default function GetUsers(){
    const [users,setUsers] = useState([])
    const [isLoading, setLoading] = useState(false)
    const loadUsers = async () => {
        setLoading(true)
        const response = await fetch ("https://reqres.in/api/users")
        const responseJson = await response.json()
        setUsers(responseJson.data)
        setLoading(false)
    }
    return(
        <>
            <ShowUsers users = {users} loadUsers = {loadUsers} Loading={isLoading} />        
        </>
    )
}