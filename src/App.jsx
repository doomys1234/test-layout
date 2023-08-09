import React from 'react';

import Header from './components/layout/Header/Header';
import CardList from './components/layout/CardList/CardList';
import './App.css';

function App() {
  const items = [{ id: 1}, { id: 2},{ id: 3},{ id: 4},]
  return (
    <div className="App">
      <Header />
      <CardList items={items} />

    </div>
  );
}

export default App;
