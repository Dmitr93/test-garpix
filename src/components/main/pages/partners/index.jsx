import React from 'react';
import './partners.scss';
import StoreCategories from './store-categories'
import BlockShops from './block-shops'
import BonusCategories from './bonus-categories'





function Partners() {
    return (
        <div className="partners">
            <StoreCategories/>
            <BlockShops/>
            <BonusCategories/>
        </div>
    );
}

export default Partners;
