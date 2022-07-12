import React, { useState, useEffect } from 'react'
//import { API } from 'aws-amplify'
//import { listNotes } from './graphql/queries'
//import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';


import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react'
import "@aws-amplify/ui-react/styles.css"
//import config from './aws-exports';
//Amplify.configure(config);

function App({signOut, user}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
        {/*
        {user ? (
          <>
            <h3>権限あり:{user.username}</h3>
            <button onClick={signOut}>サインアウト</button>
          </>
        ) : (
          <>
            <h3>権限なし</h3>
          </>
        )}
        */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
//export default withAuthenticator(App);
