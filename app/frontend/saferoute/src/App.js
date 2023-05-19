import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './map';
import About from './about';
import UsedData from './used_data';
import LoginPage from './LoginPage';
import { Amplify, Auth, Hub } from 'aws-amplify';
import awsConfig from './aws-exports';
import {withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsConfig);

function App({ signOut, user }) {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/used_data" element={<UsedData />} />
        </Routes>
    </Router>
  );
}

export default withAuthenticator(App, {
  socialProviders: ['google']
}); 