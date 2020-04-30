import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import General from './General/General'
import Sex from './Sex/Sex'
import Age from './Age/Age'
import Edu from './Edu/Edu'
import { Route } from 'react-router-dom';


function Stat(props) {
  const stat = [
    {name: "Общая", path: "/stat/general"},
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
        <Route path="/stat/general" render={ () => <General state={props.state.general} dispatch={props.dispatch}/> }/>
        <Route path="/stat/sex" render={ () => <Sex state={props.state.sex}/> }/>
        <Route path="/stat/age" render={ () => <Age state={props.state.age}/> }/>
        <Route path="/stat/edu" render={ () => <Edu state={props.state.edu}/> }/>
      </div>
    </div>
  );
}

export default Stat;
