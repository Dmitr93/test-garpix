import { createStore } from 'redux';
import { generateCashback } from './../utils/generateShops.js'
import { generateSale } from './../utils/generateShops.js'


const initialState = {
    partners: {
        electronics: {
            cashback: generateCashback(15),
            sales: generateSale(7)
        }
    }
}


const shopReducer = function ( state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
};

const store = createStore(shopReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
