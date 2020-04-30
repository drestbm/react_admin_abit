import React from 'react';
import './App.css';
import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
import { Route, Switch, Redirect} from 'react-router-dom';

function App(props) {
  return (
    <div>
      <Switch>
        <Route path="/login" render={()=><Login dispatch={props.dispatch}/>}/>
        <Route path="/"render={()=><Main state={props.state} dispatch={props.dispatch}/>}/> 
      </Switch>
      <Switch>
        <Redirect from='/' to='/stat/general'/>
      </Switch>
    </div>
  );
}

export default App;
