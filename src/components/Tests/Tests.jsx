import React from 'react';
import Navbar from '../Navbar/Navbar'
import New from './New/New'
import Active from './Active/Active'
import Arch from './Arch/Arch'
import { Route } from 'react-router-dom';


function Tests() {
  const tests = [
    {name: "Новый", path: "/tests/new"},
    {name: "Действующие", path: "/tests/active"},
    {name: "Архив", path: "/tests/arch"},
  ];
  return (
    <div className="app-body">
      <div className="app-navbar">
        <Navbar items={tests}/>
      </div>
      <div className="app-content">
        <Route path="/tests/new" component={New}/>
        <Route path="/tests/active" component={Active}/>
        <Route path="/tests/arch" component={Arch}/>
      </div>
    </div>
  );
}

export default Tests;
