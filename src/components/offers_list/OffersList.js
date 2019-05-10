import React from 'react';
import { connect } from 'react-redux';

import { getOffers } from '../../actions';
import OfferCard from './OfferCard';

class OffersList extends React.Component {
    componentDidMount() {
        this.props.getOffers();
    }

    renderCards = () => {
        return this.props.offers.map(offer => {
            return (
                <OfferCard
                    title={offer.title}
                    description={offer.text}
                    owner={offer.owner}
                    location={offer.location}
                    date={offer.date}
                    categories={offer.categories}
                    size={offer.size}
                    type_of_event={offer.type_of_event}
                    requirements={offer.requirements}
                    compensation={offer.compensation}
                    status={offer.status}
                />
            );
        });
    }

    render() {
        return (
            <div className="ui fluid container">
                <h3 className="ui centered header">Offers</h3>
                <div className="ui centered cards">
                    {this.renderCards()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user, offers: state.offer };
}

export default connect(mapStateToProps, { getOffers })(OffersList);
