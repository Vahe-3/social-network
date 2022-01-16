import React from 'react';
import style from './Login.module.css';
import {useForm} from 'react-hook-form';
import errorImage from './../../files/error.jpg'
import { useDispatch } from 'react-redux';
import { logInThunk } from './../../store/authSlice';
import { useSelector } from 'react-redux';





function Login() {

    const dispatch =useDispatch()
    const {error} = useSelector(state => state.auth)

    const {register,
        handleSubmit,
        formState:{errors}
    } = useForm({mode:"onTouched"});



    const onSubmit = (data) =>{
        
        dispatch(logInThunk(data))
    }

    
    return (

        <div className={style.login}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.loginInput}>
                    <input type="input" {...register("email",{required:true})} />
                    {errors.email && <img className={style.errorImage} src={errorImage} alt="error"></img>}
                                     
                </div>
                
                <div className={style.passwordInput}>
                    <input type="password" {...register("password",{required:true})} />
                    {errors.password && <img className={style.errorImage} src={errorImage} alt="error"></img>}
                </div>
                
                <div className={style.errorDiv}>
                    {(errors.login || errors.password) ?  <p>Fields requaired</p> : ""}
                    {error && error}


                </div>

                <div className={style.rememberMeInput}>
                    <input type="checkbox" {...register("rememberMe")} />
                    <h3>Remember Me</h3>
                </div>
                

                <div  className={style.submitButton}>
                    <button>Login</button>

                </div>

            </form>

        </div>
    )
}

export default Login
