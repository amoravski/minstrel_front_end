import React from 'react';

import OffersList from '../offers_list/OffersList';
import Sidebar from '../Sidebar';

const OffersPage = () => {
    return (
        <div>
            <OffersList />
            <Sidebar offers="active" />
        </div>
    );
}

export default OffersPage;
