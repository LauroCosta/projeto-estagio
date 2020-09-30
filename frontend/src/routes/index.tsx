import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import Place from '../pages/Place';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/place" component={Place} isPrivate />
  </Switch>
);

export default Routes;
