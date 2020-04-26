import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import New from './New/New'
import Plan from './Plan/Plan'
import History from './History/History'
import { Route } from 'react-router-dom';


function News(props) {
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
        <Route path="/news/add" render={()=><New state={props.state.new}/>}/>
        <Route path="/news/plan" render={()=><Plan state={props.state.plan}/>}/>
        <Route path="/news/history" render={()=><History state={props.state.history}/>}/>
      </div>
    </div>
  );
}

export default News;
