import React, {useState} from 'react';
import {connect} from "react-redux";
import './block-shops.scss';


function BlockShops({sales}) {

    const [countSales, setCountSales] = useState(3);
    const addCashback = () => {
        setCountSales (countSales + 4)
    };

    const initSales = sales.slice(0,countSales);

    const renderSales = initSales.map((store, index) =>(
        <div key={index} className="block-shops__sale-item block-shops__sale-item--first">
            <img className="block-shops__sale-item-img" src={store.imgCard} alt=""/>
            <div className="block-shops__sale-item-description">
                <div className="block-shops__sale-item-logo">
                    <img src={store.imgLogo} alt=""/>
                </div>
                <div className="block-shops__sale-item-text">
                    <p>{store.shop}</p>
                    <span>{store.text}</span>
                </div>
            </div>
        </div>
    ));

    return (
            <div className="block-shops__sale">
                <h3>3 предложения в категории «Электроника и бытовая техника»</h3>
                <div className="block-shops__sale-cards">
                    {renderSales}
                </div>

                {sales.length >= countSales &&
                <div className="block-shops__btn">
                    <button onClick={addCashback}>Еще 4 предложения</button>
                </div>
                }
            </div>
    );
}

function mapStateToProps (state) {
    return {
        sales: state.partners.electronics.sales
    };
}

export default connect(mapStateToProps, null)(BlockShops);
