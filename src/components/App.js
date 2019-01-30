import React from 'react';
import { connect } from 'react-redux';

import { RouterSignedIn, RouterSignedOut } from './Router';

class App extends React.Component {
    render () {
        if (this.props.user.signedIn) {
            return (
                <RouterSignedIn />
            );
        }

        return <RouterSignedOut />;
    }
}

const mapStateToProps = (state) => {
    return { user: state.user };
}

export default connect(mapStateToProps, {})(App);
