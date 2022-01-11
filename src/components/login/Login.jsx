import React, {useState,useEffect} from 'react'
import './Login.scss'
const Login = () => {
    

    return(
        <>
        <center>
            <div className="tile">
                <div className="tile-header">
                    <h2 >SIGN IN</h2>
                </div>
                
                <div className="tile-body">
                    <form id="form">
                    <label className="form-input">
                        <i className="material-icons">person</i>
                        <input type="text" autofocus="true" required />
                        <span className="label">Username</span>
                        <span className="underline"></span>
                    </label>
                    
                    <label className="form-input">
                        <i className="material-icons">lock</i>
                        <input type="password" required />
                        <span className="label">Password</span>
                        <div className="underline"></div>
                    </label>
                    
                    <div className="submit-container clearfix">          
                        <div id="submit" role="button" type="button" className="btn btn-irenic float-right" tabindex="0">
                        <span>SIGN IN</span>
                        </div>
                        
                        <div className="login-pending">
                        <div className="spinner">
                            <span className="dot1"></span>
                            <span className="dot2"></span>
                        </div>
                        
                        <div className="login-granted-content">
                            <i className="material-icons">done</i>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                </center>
                </>
    )
}

export default Login