import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PlansIndex from './components/plans_index';
import PlansNew from './components/plans_new'

export default (
    <Route path="/" component={App}>
      <IndexRoute component={PlansIndex} />
      <Route path="new" component={PlansNew} />
    </Route>
);
