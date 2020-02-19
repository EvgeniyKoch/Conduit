import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Article from './pages/article';
import GlobalFeed from './pages/global-feed';
import Authentication from './pages/authentication';
import TagFeed from './pages/tag-feed';
import YourFeed from './pages/your-feed';

export default () => (
    <Switch>
        <Route path="/" component={GlobalFeed} exact />
        <Route path="/articles/:slug" component={Article} />
        <Route path="/feed" component={YourFeed} />
        <Route path="/tags/:slug" component={TagFeed} />
        <Route path="/login" component={Authentication} />
        <Route path="/register" component={Authentication} />
    </Switch>
);
