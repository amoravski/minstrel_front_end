import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import Landing from './Landing/Landing';
import PerformersList from './pages/PerformersList';
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
                        <Route path="/performers" exact component={PerformersList} />
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;
