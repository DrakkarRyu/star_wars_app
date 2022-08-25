import { HashRouter, Routes, Route } from 'react-router-dom' //Libraries for to use Link from react router 
import { Home, Favorites } from './pages'; //Importing the files that have the pages for the app
import { ScreenLoading } from './components' //importing an animation for to screen loading
import { useSelector } from 'react-redux';
import React from 'react';
import './App.css';

function App() {

  const isLoading = useSelector(state => state.isLoading) //The animation for screen loading

  return (
    /* The basic structure for to start to make your links is the follow
    Firts HashRouter, after Routes and finally Route
    Notice that Route open an close in 1 line <Route /> 
    */
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
