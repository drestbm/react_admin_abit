import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import Total from './Substat/Total'
import Sex from './Substat/Sex'
import Age from './Substat/Age'
import Edu from './Substat/Edu'
import { Route } from 'react-router-dom';


function Stat() {
  const stat = [
    {name: "Общая", path: "/stat/total"},
    {name: "По полу", path: "/stat/sex"},
    {name: "По возрасту", path: "/stat/age"},
    {name: "По учебным заведениям", path: "/stat/edu"},
  ];
  return (
    <div className="app-body">
      <div className="app-navbar">
        <Navbar items={stat}/>
      </div>
      <div className="app-content">
        <Route path="/stat/total" component={Total}/>
        <Route path="/stat/sex" component={Sex}/>
        <Route path="/stat/age" component={Age}/>
        <Route path="/stat/edu" component={Edu}/>
      </div>
    </div>
  );
}

export default Stat;
