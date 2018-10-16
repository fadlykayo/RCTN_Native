import React, { Component } from "react";
import {
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux';

import {
  Home,
  Login,
} from '@pages';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' hideNavBar>
          <Scene key='login' component={Login} initial/>
          <Scene key='home' component={Home}/>
        </Scene>
      </Router>
    )
  }
}
