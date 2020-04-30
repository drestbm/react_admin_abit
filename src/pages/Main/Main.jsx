import React from 'react';
import Header from '../../components/Header/Header'
import News from '../../components/News/News';
import Stat from '../../components/Stat/Stat'
import Tests from '../../components/Tests/Tests'
import Settings from '../../components/Settings/Settings'
import { Route } from 'react-router-dom';

function Main(props) {
  return (
    <div className="app-wrapper">
      <div className="app-header">
        <Header/>
      </div>
      <Route path="/news" render={ () => <News state={props.state.news}/> }/>
      <Route path="/stat" render={ () => <Stat state={props.state.stat} dispatch={props.dispatch}/> }/>
      <Route path="/tests" render={ () => <Tests state={props.state.tests}/> }/>
      <Route path="/settings" render={ () => <Settings state={props.state.settings}/> }/>
    </div>
  );
}

export default Main;
