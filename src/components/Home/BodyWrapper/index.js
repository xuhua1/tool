import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import BreadCrumb from './breadcrumb';

import Home from './Home';
import Commen from './Commen';
import Vocation from './Vocation';
import Game from './Game';

const BodyWrapper = () => {
  return (
    <React.Fragment>
      <BreadCrumb/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/commen" component={Commen} />
        <Route path="/vocation" component={Vocation} />
        <Route path="/game" component={Game} />
      </Switch>
    </React.Fragment>
  );
};
export default BodyWrapper;