import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import News from './components/News/News';
import Stat from './components/Stat/Stat'
import Tests from './components/Tests/Tests'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="app-header">
          <Header/>
        </div>
        <div className="app-page">
          <Route path="/news" component={News}/>
          <Route path="/stat" component={Stat}/>
          <Route path="/tests" component={Tests}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
