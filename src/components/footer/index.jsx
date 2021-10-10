import React from 'react';
import './footer.scss';
import  menuItems from './../../utils/itemsMenu.js'

import  logosber from '@img/sberlogo.svg'
import  googlePlay from '@img/google-play.svg'
import  appStore from '@img/app-store.svg'
import  fbImg from '@img/vk.svg'
import  okImg from '@img/ok.svg'
import  instImg from '@img/inst.svg'
import  vkImg from '@img/fb.svg'
import {NavLink} from "react-router-dom";
import classNames from "classnames";




function Footer() {

    const navClass = classNames({
        'header__nav': true,
    });

    return (
        <footer className="footer">
            <div className="container container__footer">
                <div className="footer__contacts">
                    <h3>900</h3>
                    <span>По России бесплатно</span>
                    <div className="footer__logo-sberbank">
                        <img src={logosber} alt="logotype sberbank"/>
                    </div>
                    <span>© 1997—2019 ПАО Сбербанк.</span>
                </div>
                <div className="footer__info">
                    <div className="footer__menu">
                        {/*<BurgerMenu />*/}
                        <nav className={navClass}>
                            {menuItems.map((item, index) =>
                                <NavLink key={index} className="footer__nav-link" to={item.href}>{item.value}</NavLink>
                            )}
                        </nav>
                    </div>
                    <div className="footer__store-and-social">
                        <div className="footer__store">
                            <a href="#"><img src={googlePlay} alt="Google Play store"/></a>
                            <a href="#"><img src={appStore} alt="App Store"/></a>
                        </div>
                        <div className="footer__social">
                            <a href="#"><img src={fbImg} alt=""/></a>
                            <a href="#"><img src={okImg} alt=""/></a>
                            <a href="#"><img src={instImg} alt=""/></a>
                            <a href="#"><img src={vkImg} alt=""/></a>
                        </div>
                    </div>
                    <span className="footer__text-footer"> <a href="#">Политика</a> АО «ЦПЛ» в отношении обработки персональных данных и <a
                        href="#">Согласие</a> на обработку данных участника Программы «Спасибо от Сбербанка»</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
