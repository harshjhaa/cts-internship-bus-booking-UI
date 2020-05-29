import React from 'react';
import { Link } from 'react-router-dom'
import './SignupModule.css'

const SignupModule = () => {
    return (
        <div className="contents" >
            <form>
                <h5 style={{ 'text-align': 'left' }}>Register</h5>
                <br />
                <div className="form-group ">
                    <h6 style={{ 'text-align': 'left' }}>Name</h6>
                    <input type="text" name="name" className="form-control" style={{ height: 50 }} />
                </div>
                <div className="form-group ">
                    <h6 style={{ 'text-align': 'left' }}>Email</h6>
                    <input type="email" name="email" className="form-control" style={{ height: 50 }} />
                </div>
                <div className="form-group ">
                    <h6 style={{ 'text-align': 'left' }}>Password</h6>
                    <input type="password" name="password" className="form-control" style={{ height: 50 }} />
                </div>
                <div class="button-component">
                    <Link><button className="btn" style={{ "margin-right": 10 }} type="submit" to="/login-module">Login</button></Link>
                    <button className="btn" style={{ "margin-left": 10 }} type="submit">Sign up</button>
                </div>
            </form>
            <br />
        </div>
    );
};

export default SignupModule;