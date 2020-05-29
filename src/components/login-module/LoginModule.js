import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import SignupModule from '../signup-module/SignupModule';
import './LoginModule.css'

const LoginModule = () => {
    return (
        <Router>
            <div className="contents" >
                <form>
                    <h5 style={{ 'text-align': 'left' }}>Login to continue</h5>
                    <br />
                    <div className="form-group ">
                        <h6 style={{ 'text-align': 'left' }}>Email</h6>
                        <input type="email" className="form-control" style={{ height: 50 }} />
                    </div>
                    <div className="form-group ">
                        <h6 style={{ 'text-align': 'left' }}>Password</h6>
                        <input type="password" className="form-control" style={{ height: 50 }} />
                    </div>
                    <div class="button-component">
                        <button className="btn btn-info" style={{ "margin-right": 10 }} type="submit">Login</button>
                        <Link style={{ "margin-left": 10 }}  to="/signup-module"><a className="btn btn-info" type="submit">Sign up</a></Link>
                        {/* <button className="btn btn-info" style={{ "margin-left": 10 }} type="submit" to="/signup-module">Sign up</button> */}
                    </div>
                </form>
                <Switch>
                    <Route path="/signup-module" component={SignupModule} />
                </Switch>
                <br />
            </div>

        </Router>
    );
};

export default LoginModule;