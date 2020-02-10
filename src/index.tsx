import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import TopBar from './components/TopBar';
import Routes from './routes';
import { CurrentUserProvider } from './context/currentUserContext';
import CurrentUserChecker from './components/CurrentUserChecker';

const rootEl = document.getElementById('root');

const App = () => (
    <CurrentUserProvider>
        <CurrentUserChecker>
            <Router>
                <TopBar />
                <Routes />
            </Router>
        </CurrentUserChecker>
    </CurrentUserProvider>
);

render(<App />, rootEl);
