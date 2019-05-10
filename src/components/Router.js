import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import LandingPage from './pages/LandingPage';
import PerformersListPage from './pages/PerformersListPage';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import RegisterAdmirerPage from './pages/RegisterAdmirerPage';
import RegisterPerformerPage from './pages/RegisterPerformerPage';
import MapPage from './pages/MapPage';
import DashboardPage from './pages/DashboardPage';
import OffersPage from './pages/OffersPage';
import PerformancesPage from './pages/PerformancesPage';
import PerformancesCreatePage from './pages/PerformancesCreatePage';
import AdminEventsPage from './pages/AdminEventsPage.js';
import AdminAccountsPage from './pages/AdminAccountsPage.js';

export const RouterSignedOut = () => {
    return (
        <div className="ui fluid container">
            <Router history={history}>
                <div>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/map" exact component={MapPage} />
                    <Route path="/performers" exact component={PerformersListPage} />
                    <Route path="/login" exact component={LogInPage} />
                    <Route path="/register" exact component={RegisterPage} />
                    <Route path="/register/admirer" exact component={RegisterAdmirerPage} />
                    <Route path="/register/performer" exact component={RegisterPerformerPage} />
                </div>
            </Router>
        </div>
    );
};

export const RouterSignedIn = () => {
    return (
        <div className="ui fluid container">
            <Router history={history}>
                <div>
                    <Route path="/" exact component={DashboardPage} />
                    <Route path="/map" exact component={MapPage} />
                    <Route path="/performers" exact component={PerformersListPage} />
                    <Route path="/offers" exact component={OffersPage} />
                    <Route path="/performances" exact component={PerformancesPage} />
                    <Route path="/performances/new" exact component={PerformancesCreatePage} />
                    <Route path="/admin/accounts" exact component={AdminAccountsPage} />
                    <Route path="/admin/events" exact component={AdminEventsPage} />
                </div>
            </Router>
        </div>
    );
};

export const RouterSignedInAdmin = () => {
    return (
        <div className="ui fluid container">
            <Router history={history}>
                <div>
                    <Route path="/" exact component={DashboardPage} />
                    <Route path="/admin/accounts" exact component={AdminAccountsPage} />
                    <Route path="/admin/events" exact component={AdminEventsPage} />
                </div>
            </Router>
        </div>
    );
}
