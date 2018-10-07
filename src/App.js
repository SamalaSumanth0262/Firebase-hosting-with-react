import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import AllComponent from './Component/AllComponent'
import AddMenu from './Component/AddMenu';
class App extends Component {
  render() {
    return (
      <div>
         <Route exact={true} path={'/'} component={AllComponent} />
        <Route path={'/addmenu'} component={AddMenu} />
      </div>
    );
  }
}

export default App;
