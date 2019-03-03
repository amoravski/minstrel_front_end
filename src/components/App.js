import React from 'react';
import { connect } from 'react-redux';

import { RouterSignedIn, RouterSignedOut } from './Router';
import strings from '../strings';
import './App.css';

class App extends React.Component {
    getLanguageFromState() {
        strings.setLanguage(this.props.language);
    }

    render() {
        this.getLanguageFromState();
        if (this.props.user.signedIn) {
            return (
                <RouterSignedIn />
            );
        }

        return <RouterSignedOut />;
    }
}

const mapStateToProps = (state) => {
    return { user: state.user, language: state.language.current };
}

export default connect(mapStateToProps, {})(App);
