import React from 'react'
import style from './login.module.css'

export default function Login() {
  return (
    <div>
      <form className={`${style.loginForm} flex`}>
        <div>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder='username'
            className={style.loginInput}
            required 
          />
        </div>
        <div>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder='password'
            className={style.loginInput}
            required 
          />
        </div>
        <button type="submit" className='default-button m-auto'>Login</button>
        <div>
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </form>
    </div>
  )
}
