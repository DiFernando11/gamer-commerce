import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./index.css";


function Login() {
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [input, setInput] = useState({
        email: '',
        password: ''

      });

      function InputValidator(input) {
        let err = {};
        if (!input.email) {
            err.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(input.email)) {
            err.email = "Email address is invalid";
        } else if (!input.password) {
            err.password = "Password is required";
        }
        setDisabled(false);
        return err;
      }

    const handleChange = (e) => {
        e.preventDefault();
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
    
        setError(
          InputValidator({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
      };

    return ( 
        <main className='containerformlogin'>
            <div className='container'>
                <form className='formlogin'>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        aria-describedby="emailHelp"
                        value={input.email}
                    />
                    {error.email && ( <p className="error">{error.email}</p> )}
                    {/* <div  class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                    <div class="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                        aria-describedby="emailHelp"
                        value={input.password}
                    />
                    {error.password && ( <p className="error">{error.password}</p> )}
                    
                </div>
                <div className='divsubmitlogin'>
                    <button
                    className="btnformlogin"
                    type="submit"
                    disabled={
                    disabled === false && Object.entries(error).length === 0
                    ? false
                    : true
                    }
                    >
                    Submit
                </button>
                
                
                </div>
                <div className='divforgotpassword'>
                    <label className='forgotpassword'>forgot password?</label>
                </div>
                <hr className='hrformlogin'>
                </hr>
                <div className='divbuttontocreateuser'>
                    <Link to={"/CreateUser"}>
                    <button className='buttonlogintocreateuser'>Don't have an account?</button>
                    </Link>
                </div>
                </form>
            </div>
        </main>

     );
}

export default Login;
