import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';
import store from './store/store'

let rerender = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(store.getState());

// store.subscribe(rerender);

serviceWorker.unregister();