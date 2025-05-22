import React from 'react';
import AboutPage from './components/pages/AboutPage';
import './index.css'
import CheckInternetConnection from './components/CheckInternetConnection';

const App = () => {

  return (
    <CheckInternetConnection>
      <AboutPage/>
    </CheckInternetConnection>
  );
};

export default App; 