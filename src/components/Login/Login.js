import React, { useContext, useState } from 'react';
import './Login.css';
import app from '../../firebase/firebase.init';
import { getAuth } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const [err, setErr] = useState(null);
    const {signInWEP} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if(password.length < 6){
            setErr('password should be 6 characters or more.');
            return;
        }

        signInWEP(email, password)
        .then(result =>{
            console.log(result.user);
            event.target.reset();
            navigate('/');
        })
        .catch(error => console.error(error));
    }

    return (
        <div className='form-container'>
            <h1 className='login-title'>Please Login</h1>
            <form onSubmit={handleSubmit}>
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
            <p className='txt-err'>{err}</p>
        </div>
    );
};

export default Login;