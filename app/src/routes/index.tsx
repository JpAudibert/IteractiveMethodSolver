import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Jacobi2Variaveis from '../pages/Jacobi2Variaveis';
import Gauss from '../pages/Gauss';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="/jacobi-2" />} />
    <Route path="/jacobi-2" exact component={Jacobi2Variaveis} />
    {/* <Route path="/jacobi-3" exact component={Jacobi3Variaveis} />
    <Route path="/gauss-2" component={Gauss2Variaveis} />
    <Route path="/gauss-3" component={Gauss3Variaveis} /> */}
  </Switch>
);

export default Routes;
