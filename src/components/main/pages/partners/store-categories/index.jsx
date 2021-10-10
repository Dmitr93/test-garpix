import React, {useState} from 'react';
import './store-categories.scss';
import { connect } from 'react-redux';



function StoreCategories({cashback}) {

    const [countCashback, setCountCashback] = useState(5);
    const addCashback = () => {
        setCountCashback (countCashback + 4)
    };

    const initCashback = cashback.slice(0,countCashback);

    const renderCashback = initCashback.map((store, index) =>(
        <div key={index} className="store-categories__partner-cashback">
            <h4>{store.cashback}</h4>
            <p>Спасибо от суммы покупки</p>
            <img src={store.img} alt=""/>
            <span>{store.shop}</span>
        </div>
    ));

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
                    {renderCashback}
                </div>
                <div className="store-categories__btn">
                    {cashback.length >= countCashback &&
                    <button onClick={addCashback}>Еще 4 партнера</button>
                    }
                </div>
            </div>
    );
}
function mapStateToProps (state) {
    return {
        cashback: state.partners.electronics.cashback,
    };
}


export default connect(mapStateToProps)(StoreCategories);

