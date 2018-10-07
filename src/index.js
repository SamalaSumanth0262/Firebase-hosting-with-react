import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
const initialState = {
  tableData: []
}
function reducer(state = initialState,action){
 switch(action.type){
   case "CLICKED OPTION DATA":{
     return Object.assign({},state,{tableData: action.data});
   }
   default:
     return state
 }
}
export const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
       <Router>
                <App /> 
     </Router>
    </Provider>
  ,document.getElementById('root'));
registerServiceWorker();

