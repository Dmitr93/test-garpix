import React from 'react';
import {Switch, Route} from "react-router-dom";
import Partners from './pages/partners';
import CouponsCertificates from './pages/coupons-and-certificates';
import './main.scss';


function Main() {
    return (
        <main className="main">
            <div className="container">
                <Switch>
                    <Route exact path="/partners" component={Partners}/>
                    <Route exact path="/couponsCertificates" component={CouponsCertificates}/>
                </Switch>
            </div>
        </main>
    );
}

export default Main;
