import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import Place from '../pages/Place';
import Search from '../pages/Search';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/place" component={Place} isPrivate />
    <Route path="/search" component={Search} isPrivate />
  </Switch>
);

export default Routes;
