import React, { useState } from 'react'
import { LandingPage } from './pages/LandingPage';
import { CountersPage } from './pages/CountersPage';
import { createUser, fetchAllCounters, incrementCounter } from './api/CounterService';

const App: React.FC = () => {
    const [loggedInAs, setLoggedInAs] = useState<string | undefined>( undefined );
    const [username, setUsername] = useState<string>( '' );
    const [counters, setCounters] = useState<Record<string, number>>( {} );

    const login = async ( e: React.FormEvent<HTMLFormElement> ): Promise<void> => {
        e.preventDefault();
        try {
            const user = await createUser( username )
            setLoggedInAs( user.data.username )
            await fetchCounters()
        } catch ( error ) {
            console.error( error );
        }
    }

    const fetchCounters = async (): Promise<void> => {
        try {
            const countersData = await fetchAllCounters();
            setCounters( countersData || {} );
        } catch ( error ) {
            console.error( error );
        }
    };

    const increaseCounter = async ( e: React.FormEvent<HTMLButtonElement> ): Promise<void> => {
        e.preventDefault();
        try {
            const countersData = await incrementCounter( username );
            setCounters( countersData || {} );
        } catch ( error ) {
            console.error( error );
        }
    };

    const usernameChange = async ( e: React.ChangeEvent<HTMLInputElement> ): Promise<void> => {
        e.preventDefault();
        try {
            setUsername( e.target.value );
        } catch ( error ) {
            console.error( error );
        }
    };

    const logout = (): void => {
        setLoggedInAs( undefined )
    };

    return (
        <main className='App'>
            {
                !loggedInAs ?
                    <LandingPage login={login} username={username} usernameChange={usernameChange} />
                    :
                    <CountersPage loggedInAs={loggedInAs} counters={counters} logout={logout} increaseCounter={increaseCounter} />
            }
        </main>
    )
}

export default App
