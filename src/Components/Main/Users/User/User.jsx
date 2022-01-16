import style from './User.module.css'
import user from "./../../../../files/user.jpg"
import { NavLink } from 'react-router-dom';

const User = ({ name, photos, status, followed, id }) => {
    return (
        <NavLink className={style.userLink} to={"/profile/" + id} >
            <div className={style.user}>

                <div className={style.user_img}>
                    <img src={photos.small ? photos.small : user} alt="user" />
                </div>
                <div className={style.user_info}>
                    <h3>{name}</h3>
                    <p><b>Status: </b>{status}</p>



                </div>



            </div>
        </NavLink>

    )
}

export default User;