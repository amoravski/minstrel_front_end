import React from 'react';
import Header from './Header';
import Landing from './Landing';

class App extends React.Component {
    render () {
        return (
            <div className="ui container">
                <Header />
                <Landing />
            </div>
        );
    }
}

export default App;
