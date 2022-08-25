import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, Favorites } from './pages';
import { ScreenLoading } from './components'
import { useSelector } from 'react-redux';
import React from 'react';
import './App.css';

function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <div className="App">
      <HashRouter>
        {isLoading && <ScreenLoading />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
