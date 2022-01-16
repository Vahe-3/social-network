import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getUsersThunk, setCurrentPage } from '../../../store/usersSlice';
import { useSelector } from 'react-redux';
import Users from './Users';


const UsersContainer = () => {

    const dispatch = useDispatch()
    const {users,isLoading,totalUsersCount,pageSize,currentPage} = useSelector(state => state.users);
    
    useEffect(() =>{
        dispatch(getUsersThunk(currentPage))
    },[dispatch])



    const getUsers =(page) =>{
        dispatch(getUsersThunk(page))
        
    }


    return (
        <div>
            <Users  getUsers={getUsers} users={users} totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}/>
        </div>
    )
}


export default UsersContainer;


    
    


