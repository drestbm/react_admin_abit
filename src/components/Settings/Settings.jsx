import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import New from './New/New'
import List from './List/List'
import { Route } from 'react-router-dom';


function Tests() {
  const tests = [
    {name: "Новый пользователь", path: "/settings/new"},
    {name: "Список пользователей", path: "/settings/list"},
  ];
  return (
    <div className="app-body">
      <div className="app-navbar">
        <Navbar items={tests}/>
      </div>
      <div className="app-content">
        <Route path="/settings/new" component={New}/>
        <Route path="/settings/list" component={List}/>
      </div>
    </div>
  );
}

export default Tests;
