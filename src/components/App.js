import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import Landing from './Landing/Landing';
import PerformersListPage from './pages/PerformersListPage';
import RegisterPage from './pages/RegisterPage';
import RegisterAdmirerPage from './pages/RegisterAdmirerPage';
import RegisterPerformerPage from './pages/RegisterPerformerPage';
import MapPage from './pages/MapPage';

class App extends React.Component {
    render () {
        return (
            <div className="ui fluid container">
                <Router history={history}>
                    <div>
                        <Route path="/" exact component={Landing} />
                        <Route path="/map" exact component={MapPage} />
                        <Route path="/performers" exact component={PerformersListPage} />
                        <Route path="/register" exact component={RegisterPage} />
                        <Route path="/register/admirer" exact component={RegisterAdmirerPage} />
                        <Route path="/register/performer" exact component={RegisterPerformerPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
