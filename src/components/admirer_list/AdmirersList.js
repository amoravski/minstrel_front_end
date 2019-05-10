import React from 'react';
import { connect } from 'react-redux';

import { getAdmirers } from '../../actions';
import AdmirerCard from './AdmirerCard';
import './AdmirersList.css';


class AdmirersList extends React.Component {
    componentDidMount() {
        this.props.getAdmirers();
    }

    renderCards = () => {
        return this.props.admirers.map(admirer => {
            return (
                <AdmirerCard
                    name={admirer.username}
                    key={admirer.username}
                    admin={this.props.admin}
                />
            );
        });
    }

    render() {
        var className = "performers-list push-out";
        if (this.props.user.signedIn) {
            className = "performers-list push-out-signedIn";
        }
        if (this.props.sidebar.visible) {
            className = "performers-list performers-pushed push-in";
        }
        if (this.props.sidebar.visible && this.props.user.signedIn) {
            className = "performers-list performers-pushed-signedIn push-in-signedIn";
        }
        if (this.props.sidebar.first) {
            className = "performers-list performers-pushed"
        }
        if (this.props.sidebar.first && this.props.user.signedIn) {
            className = "performers-list performers-pushed-signedIn";
        }
        return (
            <div className={className}>
                <div className="performers-cards ui center aligned relaxed grid noMargin">
                    {this.renderCards()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { sidebar: state.sidebar, user: state.user, admirers: state.admirers };
}

export default connect(mapStateToProps, { getAdmirers })(AdmirersList);
