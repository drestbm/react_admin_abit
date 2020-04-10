import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import Add from './Subnews/Add'
import Plan from './Subnews/Plan'
import History from './Subnews/History'
import { Route } from 'react-router-dom';


function News() {
  const news = [
    {name: "Новая рассылка", path: "/news/add"},
    {name: "Запланированные", path: "/news/plan"},
    {name: "История", path: "/news/history"},
  ];
  return (
    <div className="app-body">
      <div className="app-navbar">
        <Navbar items={news}/>
      </div>
      <div className="app-content">
        <Route path="/news/add" component={Add}/>
        <Route path="/news/plan" component={Plan}/>
        <Route path="/news/history" component={History}/>
      </div>
    </div>
  );
}

export default News;
