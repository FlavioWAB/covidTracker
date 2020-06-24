import React from 'react';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
  </Switch>
);

export default Routes;
