import React, { useState } from 'react';
import './Login.css';
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {

    return (
        <div className='form-container'>
            <h1 className='login-title'>Please Login</h1>
            <form>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='your email' required id=''></input>
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='password' required id=''></input>
                </div>
                <input className='submit-but' type="submit" value='Login' />
            </form>
            <p className='log-bottom-txt'>You don't have an account? Go to <Link to='/register'>Register</Link></p>   
        </div>
    );
};

export default Login;