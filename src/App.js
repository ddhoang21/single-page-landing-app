import React from 'react';
import './App.css';

import { Header, About, Services, Team, Contact } from './containers';
import { Navbar, Brand } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <About />
      <Services />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
