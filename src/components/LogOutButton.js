import React from 'react';
import { connect } from 'react-redux';

import { logOut } from '../actions';

class LogOutButton extends React.Component {
    handleClick = () => {
        this.props.logOut(this.props.user.jwt);
    }

    render() {
        return (
            <button className="log-out-button ui circular button" onClick={this.handleClick}>
                LOG OUT
            </button>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(mapStateToProps, { logOut })(LogOutButton);
