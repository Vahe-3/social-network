import style from "./Header.module.css";
import logo from "./../../files/logo.png"
import { useSelector } from 'react-redux';
import { logoutThunk } from "./../../store/authSlice";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";


const Header = () =>{


   const {login,email} =  useSelector(state => state.auth.userData);
   const dispatch = useDispatch();

   const userLogaut = ()=>{
    dispatch(logoutThunk())
   }

   
   
    return(
        <header className={style.header}>

            <NavLink to="./profile" >
            <div className={style.header_logo}>
                <img src={logo} alt="logo" />
                <h1>Social Network</h1>
            </div>
            </NavLink>

            <div className={style.header_userInfo}>
                <h2>{login}</h2>
                <p>{email}</p>
                
            <div className={style.header_button}>
                <button onClick={() => userLogaut()}>Logout</button>
            </div>
            </div>
            
        
        
        </header>
    )
}

export default Header;