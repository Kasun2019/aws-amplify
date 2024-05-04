import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import UserProfile from './component/UserProfile';
import 'bootstrap/dist/css/bootstrap.css'

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {

   const [userId, setUserId] = useState('');

  return (
    <div className='App'>
      <header className='App-header'>
       
      <Authenticator>
      {({ signOut, user }) => (
        <React.Fragment>
          {setUserId(user.userId)}
          <main>
            <h3>Hello {user.userId}</h3>
            <Button className="primary" onClick={signOut}>Sign out</Button>
          </main>
        </React.Fragment>
      )}
    </Authenticator>
      </header>
      {userId && <UserProfile props={userId} />}
      
     
    </div>
  );
}

export default withAuthenticator(App);
