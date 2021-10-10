import React from 'react';
import {useState} from 'react';
import './header.scss';

import  menuItems from './../../utils/itemsMenu.js'
import  ModalWindow from './../modal-window'

import  logo from '@img/logo.svg'
import  geolocationImg from '@img/geolocation.svg'
import  searchImg from '@img/search.svg'
import {NavLink} from "react-router-dom";
import classNames from "classnames";


function Header() {
    const [modalActive, setModalActive] = useState(false);
    const [modalSearchActive, setModalSearchActive] = useState(false);
    const [isShowMenu, showMenu] = useState(false);

    const navClass = classNames({
        'header__nav': true,
        'header__nav--isShow': isShowMenu
    });


    const disActive = () => {
        setModalActive(false);
        setModalSearchActive(false)
    };


    return (
    <header className="header">
        <div className="container container--header">
            <a className="header__logo" href="#">
                <img src={logo} alt="logo"/>
            </a>

            <div className="header__menu">
                <nav className={navClass}>
                    {menuItems.map((item, index) =>
                        <NavLink key={index} className="header__nav-link" to={item.href}>{item.value}</NavLink>
                    )}
                </nav>
            </div>

            <div className="header__actions">
                <div className="header__geolocation">
                    <img src={geolocationImg} alt="geolocation"/>
                    <a onClick={() => setModalActive(true)}  href="#">Санкт-Петербург</a>
                    {modalActive && <ModalWindow active={modalActive} desActive={disActive}>
                        <div className="modal-geolocation">
                            <span>Ваш город - <span className="modal-geolocation__city">Санкт-Петербург</span>?</span>
                            <div>
                                <button className="header__btn-green-white header__btn-green-white--modal">Да</button>
                                <button className="header__btn-green-white header__btn-green-white--modal">Сменить город</button>
                            </div>
                        </div>
                    </ModalWindow>}
                </div>

                <div className="header__wrap-buttons">
                    <button onClick={() => setModalSearchActive(true)}  className="header__search">
                        <img src={searchImg} alt="search"/>
                    </button>

                    <button className="header__btn-green-white">Войти</button >
                    {modalSearchActive && <ModalWindow active={modalSearchActive} desActive={disActive}>
                        <div className="modal-search">
                            <input placeholder="Поиск" type="search"></input>
                            <img src={searchImg} alt="search"/>
                        </div>
                    </ModalWindow>}
                </div>

            </div>

            <div className="burger-btn" onClick={()=>  showMenu(!isShowMenu)}>
                <span></span>
            </div>
        </div>
    </header>
    );
}

export default Header;
