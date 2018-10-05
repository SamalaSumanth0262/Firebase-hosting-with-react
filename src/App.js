import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import AllComponent from './Component/AllComponent'
class App extends Component {
  render() {
    return (
      <div>
         <Route exact={true} path={'/'} component={AllComponent} />
      </div>
    );
  }
}

export default App;
