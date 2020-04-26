import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import General from './Substat/General'
import Sex from './Substat/Sex'
import Age from './Substat/Age'
import Edu from './Substat/Edu'
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
        <Route path="/stat/general" render={ () => <General general={props.state.general}/> }/>
        <Route path="/stat/sex" render={ () => <Sex sex={props.state.sex}/> }/>
        <Route path="/stat/age" render={ () => <Age age={props.state.age}/> }/>
        <Route path="/stat/edu" render={ () => <Edu edu={props.state.edu}/> }/>
      </div>
    </div>
  );
}

export default Stat;
