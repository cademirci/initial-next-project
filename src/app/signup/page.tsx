import React from 'react'
import style from './signup.module.css'

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
        <button type="submit" className='default-button m-auto'>Sign up</button>
      </form>
    </div>
  )
}
