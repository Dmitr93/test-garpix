import React from 'react';
import './block-shops.scss';

import mvideoImg from '@img/mvideo.svg'
import tehnoparkImg from '@img/tehnopark.svg'
import eurosetImg from '@img/euroset.svg'
import eurosetCardImg from '@img/euroset-card.svg'
import mvideoCardImg from '@img/mvideo-card.svg'
import tehnoparkCardImg from '@img/tehnopark-card.svg'



function BlockShops() {
    return (
            <div className="block-shops__sale">
                <h3>3 предложения в категории «Электроника и бытовая техника»</h3>
                <div className="block-shops__sale-cards">
                    <div className="block-shops__sale-item block-shops__sale-item--first">
                        <img className="block-shops__sale-item-img" src={tehnoparkCardImg} alt="tehnopark image"/>
                        <div className="block-shops__sale-item-description">
                            <div className="block-shops__sale-item-logo">
                                <img src={tehnoparkImg} alt=""/>
                            </div>
                            <div className="block-shops__sale-item-text">
                                <p>Технопарк</p>
                                <span>20% спасибо за технику Electrolux</span>
                            </div>
                        </div>
                    </div>
                    <div className="block-shops__sale-item">
                        <img className="block-shops__sale-item-img" src={eurosetCardImg} alt="euroset image"/>
                        <div className="block-shops__sale-item-description">
                            <div className="block-shops__sale-item-logo">
                                <img src={eurosetImg} alt=""/>
                            </div>
                            <div className="block-shops__sale-item-text">
                                <p>Евросеть</p>
                                <span>10% спасибо за покупки в черную пятницу</span>
                            </div>
                        </div>
                    </div>
                    <div className="block-shops__sale-item block-shops__sale-item--lust">
                        <img className="block-shops__sale-item-img" src={mvideoCardImg} alt="mvideo image"/>
                        <div className="block-shops__sale-item-description">
                            <div className="block-shops__sale-item-logo">
                                <img src={mvideoImg} alt=""/>
                            </div>
                            <div className="block-shops__sale-item-text">
                                <p>М.Видео</p>
                                <span>15% спасибо для студентов</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-shops__btn">
                    <button>Еще 4 предложения</button>
                </div>
            </div>
    );
}

export default BlockShops;
