import React from 'react';

import OfferCard from './OfferCard';
import minstrel_api from '../../apis/minstrel_api';

class OffersList extends React.Component {
    state = { offers: [] };

    componentDidMount () {
        this.getOffers();
    }

    getOffers = async () => {
        const resp = await minstrel_api.get('/offer')
        this.setState({
            offers: resp.data.offers
        });
    }

    renderCards = () => {
        return this.state.offers.map(offer => {
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

export default OffersList;
