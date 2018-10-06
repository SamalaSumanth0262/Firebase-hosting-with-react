import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
const initialState = {
  number: 0
}
function reducer(state = initialState,action){
 switch(action.type){
   case "INCREMENT":{
     return{
       number:state.number+1
     }
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

