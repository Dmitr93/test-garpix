import React from 'react';
import './bonus-categories.scss';

import burgerKingImg from '@img/bk.svg'
import pyaterochkaImg from '@img/5ka.svg'
import respublikaImg from '@img/respublika.svg'
import iviImg from '@img/ivi.svg'
import teztourImg from '@img/teztour.svg'
import megafonImg from '@img/megafon.svg'
import budzdorovImg from '@img/bud-zdorov.svg'
import litresImg from '@img/litres.svg'
import posudaImg from '@img/posudacentr.svg'
import lamodaImg from '@img/lamoda.svg'
import mytoysImg from '@img/mytoys.svg'
import ozonImg from '@img/ozon.svg'
import bookingcarImg from '@img/bookingcars.svg'
import sberbankImg from '@img/sber.svg'
import tripsterImg from '@img/tripster.svg'







function BonusCategories() {
    return (
            <div className="bonus-categories">
                <div className="bonus-categories__wrap">
                    <div className="bonus-categories__content">
                        <a href="#"><img src={pyaterochkaImg} alt=""/></a>
                        <a href="#"><img src={respublikaImg} alt=""/></a>
                        <a href="#"><img src={burgerKingImg} alt=""/></a>
                        <a href="#"><img src={megafonImg} alt=""/></a>
                        <a href="#"><img src={iviImg} alt=""/></a>
                    </div>
                    <div className="bonus-categories__description">
                        <div className="void-block"></div>
                        <p>Скидки за бонусы</p>
                    </div>
                </div>
                <div className="bonus-categories__wrap">
                    <div className="bonus-categories__content bonus-categories__content--black-circle">
                        <div className="bonus-categories__content-wrap">
                            <div className="bonus-categories__black-circle-sale">
                                <p>3%</p>
                            </div>
                            <a href="#"><img src={budzdorovImg} alt=""/></a>
                        </div>
                        <div className="bonus-categories__content-wrap">
                            <div className="bonus-categories__black-circle-sale">
                                <p>1,5%</p>
                            </div>
                            <a href="#"><img src={pyaterochkaImg} alt=""/></a>
                        </div>
                        <div className="bonus-categories__content-wrap">
                            <div className="bonus-categories__black-circle-sale">
                                <p>5%</p>
                            </div>
                            <a href="#"><img src={litresImg} alt=""/></a>
                        </div>
                    </div>
                    <div className="bonus-categories__description">
                        <div className="void-block"></div>
                        <p>Большой % начисления</p>
                    </div>
                </div>
                <div className="bonus-categories__wrap">
                    <div className="bonus-categories__content">
                        <a href="#"><img src={posudaImg} alt=""/></a>
                        <a href="#"><img src={lamodaImg} alt=""/></a>
                        <a href="#"><img src={mytoysImg} alt=""/></a>
                    </div>
                    <div className="bonus-categories__description">
                        <div className="void-block"></div>
                        <p>Выгодные купоны</p>
                    </div>
                </div>
                <div className="bonus-categories__wrap">
                    <div className="bonus-categories__content">
                        <a href="#"><img src={ozonImg} alt=""/></a>
                        <a href="#"><img src={teztourImg} alt=""/></a>
                        <a href="#"><img src={bookingcarImg} alt=""/></a>
                        <a href="#"><img src={sberbankImg} alt=""/></a>
                        <a href="#"><img src={tripsterImg} alt=""/></a>
                    </div>
                    <div className="bonus-categories__description">
                        <div className="void-block"></div>
                        <p>Персональное исходя из трат</p>
                    </div>
                </div>
            </div>
    );
}

export default BonusCategories;
