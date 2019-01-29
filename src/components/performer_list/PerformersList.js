import React from 'react';

import minstrel_api from '../../apis/minstrel_api';
import PerformersCard from './PerformersCard';
import './PerformersList.css';


class PerformersList extends React.Component {
    state = { performers: [] }
    
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
        return (
            <div className="performers-list pusher">
                <div className="performers-cards ui center aligned relaxed grid noMargin">
                    {this.renderCards()}
                </div>
            </div>
        );
    }
}

export default PerformersList;
