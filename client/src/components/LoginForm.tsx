import React from "react";
import './LoginForm.css';

type LoginFormProps = {
  username: string,
  login: ( e: React.FormEvent<HTMLFormElement> ) => void,
  usernameChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void
}

export const LoginForm = ( { login, username, usernameChange }: LoginFormProps ) => {
  return (
    <div style={{ padding: '1em' }}>
      <form onSubmit={login}>
        <input
          className='username'
          type='text'
          name='username'
          value={username}
          placeholder='Username'
          onChange={usernameChange}
        />
        <div>
          <input className='login' type='submit' value='Login' />
        </div>
      </form>
    </div>
  )
}