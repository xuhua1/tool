import React, { Component } from 'react';
import { Globalstyle } from './styles/global';
import { BrowserRouter, Route } from 'react-router-dom';
import 'whatwg-fetch';
import View from './views';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Globalstyle />
        <BrowserRouter>
          <Route path="/" component={ View }></Route>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;