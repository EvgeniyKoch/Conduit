import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import TopBar from './components/TopBar';
import Routes from './routes';

const rootEl = document.getElementById('root');

const App = () => (
    <div>
        <Router>
            <TopBar />
            <Routes />
        </Router>
    </div>
);

render(<App />, rootEl);
