import React from 'react';
import { connect } from 'react-redux';

import AdmirersList from '../admirer_list/AdmirersList';
import PerformersList from '../performer_list/PerformersList';

class AccountPanel extends React.Component {
    componentDidMount() {
    }
    render () {
        return (
            <div className="ui grid">
                <div className="row">
                    <AdmirersList admin="true" />
                    <PerformersList admin="true" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { })(AccountPanel);
