import User from './User/User';
import style from './Users.module.css'
import Page from './Page/Page';
import Paginator from '../../../supporting/Paginator/Paginator';

const Users = ({ users, totalUsersCount, pageSize , getUsers, currentPage }) => {
    

    


    return (
        <div className={style.users}>
            <div  className={style.users_page}>
                
                    <Paginator totalItemsCount={totalUsersCount}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                addNewUsers={getUsers}/>
                                
            </div>                    

            <div>
                {
                    users.map(user => <User key={user.id} {...user} />)
                }
            </div>
        </div>
    )
}                
            



export default Users;