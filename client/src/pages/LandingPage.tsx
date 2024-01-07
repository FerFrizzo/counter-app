import React from 'react';
import './LandingPage.css';
import { Title } from '../components/Title';
import { LoginForm } from '../components/LoginForm';

export type LandingPageProps = {
  login: ( e: React.FormEvent<HTMLFormElement> ) => void,
  username: string,
  usernameChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void
}

export function LandingPage ( welcomeProps: LandingPageProps ) {
  return (
    <div className='centeredBox'>
      <Title text='Welcome' />
      <LoginForm
        login={welcomeProps.login}
        username={welcomeProps.username}
        usernameChange={welcomeProps.usernameChange}
      />
    </div >
  )

};