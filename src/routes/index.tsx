import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/singup" component={SignUp} />
      <Route path="/forgot" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
