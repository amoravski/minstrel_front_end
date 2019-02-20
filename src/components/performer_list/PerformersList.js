import React from 'react';
import { connect } from 'react-redux';

import minstrel_api from '../../apis/minstrel_api';
import PerformersCard from './PerformersCard';
import './PerformersList.css';


class PerformersList extends React.Component {
    state = { performers: [] };
    
    componentDidMount() {
        this.getPerformers();
    }

    getPerformers = async () => {
        const resp = await minstrel_api.get('/performer')
        this.setState({
            performers: resp.data.performers
        });
    }

    renderCards = () => {
        return this.state.performers.map(performer => {
            return (
                <PerformersCard
                    name={performer.username}
                    key={performer.username}
                    location={performer.location}
                />
            );
        });
    }

    render () {
        var className="performers-list push-out";
        if (this.props.user.signedIn) {
            className="performers-list push-out-signedIn";
        }
        if (this.props.sidebar.visible) {
            className="performers-list performers-pushed push-in";
        }
        if (this.props.sidebar.visible && this.props.user.signedIn) {    
            className="performers-list performers-pushed-signedIn push-in-signedIn";
        }
        if (this.props.sidebar.first) {
            className="performers-list performers-pushed"
        }
        if (this.props.sidebar.first && this.props.user.signedIn) {
            className="performers-list performers-pushed-signedIn";
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
    return { sidebar: state.sidebar, user: state.user };
}

export default connect(mapStateToProps, {})(PerformersList);
