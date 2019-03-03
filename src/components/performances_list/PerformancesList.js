import React from 'react';

import PerformanceCard from './PerformanceCard';
import minstrel_api from '../../apis/minstrel_api';

class PerformancesList extends React.Component {
    state = { performances: [] };

    componentDidMount() {
        this.getPerformances();
    }

    getPerformances = async () => {
        const resp = await minstrel_api.get('/performance')
        this.setState({
            performances: resp.data.performances
        });
    }

    renderCards = () => {
        return this.state.performances.map(performance => {
            return (
                <PerformanceCard
                    title={performance.title}
                    description={performance.text}
                    performer={performance.performer}
                    location={performance.location}
                    date={performance.date}
                    categories={performance.categories}
                />
            );
        });
    }

    render() {
        return (
            <div className="ui fluid container">
                <h3 className="ui centered header">Performances</h3>
                <div className="ui centered cards">
                    {this.renderCards()}
                </div>
            </div>
        );
    }
}

export default PerformancesList;
