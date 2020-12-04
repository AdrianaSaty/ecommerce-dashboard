import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { HashRouter as Router, Route } from 'react-router-dom';

import Pedidos from './containers/Pedidos';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>

          <div>
            <Route path={"/"} exact component={Pedidos}></Route>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
