import React from 'react';
import './App.css';

import { Header, About, Services, Team, Contact } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Services />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
