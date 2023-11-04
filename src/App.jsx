import React from 'react';
import { useState } from 'react';

import HomePage from './home/HomePage';
import Header from './header/Header';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;