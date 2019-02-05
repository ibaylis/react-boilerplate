import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';

import {LoginPage} from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PubliceRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PubliceRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route path="/help" component={NotFoundPage} />
                <Route component={HelpPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;