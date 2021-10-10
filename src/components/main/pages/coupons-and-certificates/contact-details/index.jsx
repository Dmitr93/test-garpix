import React from 'react';
import './contact-details.scss';
import appleLogo from '@img/applemusic.svg';
import metroGreenImg from '@img/metro-logo-green.svg';
import metroRedImg from '@img/metro-logo-red.svg';





function ContactDetails() {
    return (
        <div className="contact-details">
            <div className="contact-details__logo-mini">
                <img src={appleLogo} alt="apple logo"/>
            </div>
            <div className="contact-details__content">
                <span>Москва, ул. Большая Татарская, 21</span>
                <div className="contact-details__metro">
                    <img src={metroGreenImg} alt=""/> <span>Маяковская</span>
                    <img src={metroRedImg} alt=""/> <span>Лубянка</span>
                </div>
                <span className="contact-details__phone">+7 495 220-30-44</span>
                <span className="contact-details__working-hours">Ежедневно с 09:00 до 21:00</span>
                <a className="contact-details__site" href="#">apple.com</a>
                <a className="contact-details__route" href="#">Проложить маршрут</a>
            </div>
        </div>
    );
}

export default ContactDetails;
