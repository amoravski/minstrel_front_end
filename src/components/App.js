import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../history';
import LandingPage from './pages/LandingPage';
import PerformersListPage from './pages/PerformersListPage';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import RegisterAdmirerPage from './pages/RegisterAdmirerPage';
import RegisterPerformerPage from './pages/RegisterPerformerPage';
import MapPage from './pages/MapPage';
import DashboardPage from './pages/DashboardPage'

class App extends React.Component {
    render () {
        return (
            <div className="ui fluid container">
                <Router history={history}>
                    <div>
                        <Route path="/" exact component={this.props.user.signedIn ? DashboardPage : LandingPage} />
                        <Route path="/map" exact component={MapPage} />
                        <Route path="/performers" exact component={PerformersListPage} />
                        <Route path="/login" exact component={LogInPage} />
                        <Route path="/register" exact component={RegisterPage} />
                        <Route path="/register/admirer" exact component={RegisterAdmirerPage} />
                        <Route path="/register/performer" exact component={RegisterPerformerPage} />
                        <Route path="/dashboard" exact component={DashboardPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps, {})(App);
