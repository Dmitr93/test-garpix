import React from 'react';
import './coupons-certificates.scss';
import ContactDetails from './contact-details';

import applePicture from '@img/appleImg.svg';
import appleLogo from '@img/applemusic.svg';
import mapImg from '@img/mapimg.svg';



function CouponsCertificates() {
    return (
            <div className="coupons-certificates">
                <div className="coupons-certificates__link-chapter">
                    <a href="#">Скидочные купоны</a>
                    <span> · </span>
                    <a href="#">Развлечения</a>
                </div>
                <h3 className="coupons-certificates__title">Apple Music за СПАСИБО</h3>
                <div className="coupons-certificates__content">
                    <img src={applePicture} alt="technique apple"/>
                    <div className="coupons-certificates__content-text">
                        <div className="coupons-certificates__bonus-list-wrap">
                            <h3 className="coupons-certificates__subtitle">C 17 Декабря 2018 г. по 17 Декабря 2019 г.</h3>
                            <p>Обменивайте 169 СПАСИБО на месяц подписки в Apple Music и наслаждайтесь любимой музыкой без перерыва. </p>
                            <ul className="coupons-certificates__bonus-list">
                                <li>Получите доступ к миллионам альбомов, исполнителей и песен</li>
                                <li>Эксклюзивный и оригинальный контент</li>
                                <li>Вы можете отказаться от подписки в любой момент</li>
                                <li>Скачивайте любимую музыку и слушайте офлайн</li>
                            </ul>
                        </div>
                        <div className="coupons-certificates__conditions">
                            <h1>Как использовать промо-код:</h1>
                            <ol>
                                <li>Откройте приложение «Музыка» и введите существующий Apple ID и пароль для входа в учетную запись. (Если у вас нет Apple ID, вам будет предложено его создать).</li>
                                <li>Нажмите на «3 месяца бесплатно» (специальное предложение для новых пользователей).</li>
                                <li>Выберите индивидуальную подписку и нажмите «3 месяца бесплатно».</li>
                                <li>Перейдите в учетную запись.</li>
                                <li>Нажмите «Использовать код».</li>
                                <li>Введите 12-значный код.</li>
                                <li>Получите сообщение с подтверждением использования кода.</li>
                            </ol>
                            <p>Под персональными данными в целях настоящих Правил понимаются персональные данные Участников Акции и иных лиц - субъектов персональных данных как они определены в Законе «О персональных данных». Под обработкой персональных данных в настоящих <b>Правилах понимается любое действие</b> (операция), совершаемое в целях проведения Акции, или совокупность действий(операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных
                                данных, предоставленных Участником Акции Банку/ Уполномоченной Компании.</p>
                            <a className="coupons-certificates__link-doc" href="#">Подробнее об Apple Music для Android</a>
                            <a className="coupons-certificates__link-doc" href="#">Правила акции</a>
                            <span>Только при оформлении индивидуальной подписки. По окончании пробного периода подписка будет продлена автоматически. 4 месяца бесплатно только для новых подписчиков. Срок действия кода истекает 31 января 2020 года. Это промокод, который не подлежит перепродаже, обмену на денежный эквивалент и замене в случае кражи или потери. Предложение действительно при оформлении индивидуальной подписки на Apple Music на территории Российской Федерации. Требуется учетная запись iTunes. Применяются соответствующие условия <a
                                href="#">(подробнее)</a>.
Промокодом может воспользоваться лицо старше 13 лет, чье местоположение совпадает со страной/регионом магазина, в котором активируется код.
Требуются совместимые продукты и сервисы. Apple Music — зарегистрированная торговая марка Apple. Apple не является участником или спонсором этой промоакции.</span>

                        </div>
                    </div>
                </div>
                <div  className="coupons-certificates__contacts">
                    <div className="coupons-certificates__apple-logo">
                        <img src={appleLogo} alt="apple logo"/>
                        <h3>Apple Music</h3>
                    </div>
                    <div className="coupons-certificates__address-block">
                        <ContactDetails/>
                        <ContactDetails/>
                        <ContactDetails/>
                    </div>
                    <div className="coupons-certificates__map">
                        <img src={mapImg} alt="map"/>
                    </div>
                </div>
            </div>
    );
}

export default CouponsCertificates;
