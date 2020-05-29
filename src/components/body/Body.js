import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginModule from '../login-module/LoginModule';
import FromToDateModule from '../from-to-date-module/FromToDateModule';
import FeatureModule from '../feature-image/FeatureModule';
import SeatSelectionModule from '../seat-selection-module/SeatSelectionModule';
import PaymentModule from '../payment-module/PaymentModule';
import TicketConfirmationModule from '../ticket-confirmation-module/TicketConfirmationModule';

import './Body.css';
const Body = () => {
    return (
        <Router>
            <div className="body-contents">
                <FeatureModule />
                <Switch>
                    <div>
                        <FromToDateModule />
                        <SeatSelectionModule />
                        <PaymentModule />
                        <TicketConfirmationModule />
                    </div>
                </Switch>
            </div >
        </Router>
    );
};

export default Body;