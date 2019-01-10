import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import Header from './Header';
import Landing from './Landing';
import PerformersList from './pages/PerformersList';

class App extends React.Component {
    render () {
        return (
            <div className="ui container">
                <Header />
                <Router history={history}>
                    <div>
                        <Route path="/" exact component={Landing} />
                        <Route path="/performers" exact component={PerformersList} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
