import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Article from './pages/article';
import GlobalFeed from './pages/global-feed';
import Authentication from './pages/authentication';

export default () => (
    <Switch>
        <Route path="/" component={GlobalFeed} exact />
        <Route path="/login" component={Authentication} />
        <Route path="/register" component={Authentication} />
        <Route path="/articles/:slug" component={Article} />
    </Switch>
);
