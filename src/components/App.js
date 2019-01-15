import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import Landing from './Landing/Landing';
import PerformersListPage from './pages/PerformersListPage';
import MapPage from './pages/MapPage';
import Footer from './Footer';

class App extends React.Component {
    render () {
        return (
            <div className="ui fluid container">
                <Router history={history}>
                    <div>
                        <Route path="/" exact component={Landing} />
                        <Route path="/map" exact component={MapPage} />
                        <Route path="/performers" exact component={PerformersListPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
