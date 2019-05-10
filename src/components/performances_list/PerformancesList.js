import React from 'react';
import { connect } from 'react-redux';

import { getPerformances } from '../../actions';
import PerformanceCard from './PerformanceCard';

class PerformancesList extends React.Component {
    componentDidMount() {
        this.props.getPerformances();
    }

    renderCards = () => {
        return this.props.performances.map(performance => {
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

const mapStateToProps = state => {
    return { user: state.user, performances: state.performance };
}

export default connect(mapStateToProps, { getPerformances })(PerformancesList);
