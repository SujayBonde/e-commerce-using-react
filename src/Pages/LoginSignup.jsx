import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-conatiner">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name'/>
          <input type="email" placeholder='Enter Your Email Address' />
          <input type="password" placeholder='Enter Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <Link to='/loginPage'><span><a href="#">Login Here</a></span></Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>

    </div>
  )
}
