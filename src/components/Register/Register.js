import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='form-container'>
            <h1 className='login-title'>Please Register</h1>
            <form>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='your email' required id=''></input>
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='password' required id=''></input>
                </div>
                <div className="form-control">
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type='password' name='confirm' placeholder='password' required id=''></input>
                </div>
                <input className='submit-but' type="submit" value='Register' />
            </form>
            <p className='log-bottom-txt'>Already have an account? Go to <Link to='/login'>Log in</Link></p>   
        </div>
    );
};

export default Register;