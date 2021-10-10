import React from 'react';
import './store-categories.scss';

import mvideoImg from '@img/mvideo.svg'
import burgerKingImg from '@img/bk.svg'
import borkImg from '@img/bork.svg'
import tehnoparkImg from '@img/tehnopark.svg'
import eurosetImg from '@img/euroset.svg'








function StoreCategories() {
    return (
            <div className="store-categories">
                <h3>Партнеры и предложения</h3>
                <nav className="store-categories__menu">
                    <a className="store-categories__menu-item" href="#">Все партнеры</a>
                    <a className="store-categories__menu-item" href="#">Популярные</a>
                    <a className="store-categories__menu-item" href="#">Супермаркеты</a>
                    <a className="store-categories__menu-item" href="#">Кафе и рестораны</a>
                    <a className="store-categories__menu-item" href="#">Такси</a>
                    <a className="store-categories__menu-item" href="#">Красота</a>
                    <a className="store-categories__menu-item" href="#">Электроника и бытовая техника</a>
                    <a className="store-categories__menu-item" href="#">Зоотовары</a>
                    <a className="store-categories__menu-item" href="#">Кино и театр</a>
                    <a className="store-categories__menu-item" href="#">• • •</a>
                </nav>
                <div className="store-categories__radio-button">
                    <span className="store-categories__radio-button-text">Начисляют спасибо</span>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <span className="store-categories__radio-button-text">Принимают спасибо</span>
                </div>
                <div className="store-categories__wrap-cashback">
                    <div className="store-categories__partner-cashback store-categories__partner-cashback--first">
                        <h4>1,5%</h4>
                        <p>Спасибо от суммы покупки</p>
                        <img src={mvideoImg} alt="logo M.Video"/>
                        <span>М.Видео</span>
                    </div>
                    <div className="store-categories__partner-cashback">
                        <h4>3%</h4>
                        <p>Спасибо от суммы покупки</p>
                        <img src={burgerKingImg} alt="logo Burger King"/>
                        <span>Бургер Кинг </span>
                    </div>
                    <div className="store-categories__partner-cashback">
                        <h4>4,5%</h4>
                        <p>Спасибо от суммы покупки</p>
                        <img src={tehnoparkImg} alt="logo Tehnopark"/>
                        <span>Холодильник.ру</span>
                    </div>
                    <div className="store-categories__partner-cashback">
                        <h4>1,5%</h4>
                        <p>Спасибо от суммы покупки</p>
                        <img src={borkImg} alt="logo Bork"/>
                        <span>BORK</span>
                    </div>
                    <div className="store-categories__partner-cashback store-categories__partner-cashback--lust">
                        <h4>1,5%</h4>
                        <p>Спасибо от суммы покупки</p>
                        <img src={eurosetImg} alt="logo Euroset"/>
                        <span>Евросеть</span>
                    </div>
                </div>
                <div className="store-categories__btn">
                    <button>Еще 4 партнера</button>
                </div>
            </div>


    );
}

export default StoreCategories;
