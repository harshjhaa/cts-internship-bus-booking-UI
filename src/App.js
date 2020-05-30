import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Body from './components/body/Body'
import Navbar from './components/navbar/Navbar'

import FeatureModule from './components/feature-image/FeatureModule';
import FromToDateModule from './components/from-to-date-module/FromToDateModule';
import SeatSelectionModule from './components/seat-selection-module/SeatSelectionModule';
import PaymentModule from './components/payment-module/PaymentModule';
import TicketConfirmationModule from './components/ticket-confirmation-module/TicketConfirmationModule';



function App() {

  const [newTab, setNewTab] = useState(1)

  function proceed(tabNo) {
    setNewTab(tabNo)
    console.log("Clicked")
    console.log(tabNo)
    console.log(newTab)
    
  }

  return (
    <Router>
      <div >
        <Navbar />
        {/* <Body /> */}
        <div className="body-contents">
          <FeatureModule tabNumber={newTab} />
          <Switch>
            <Route path="/from-date-to-module" render={props => <FromToDateModule {...props} proceedToNextPage={e => proceed(2)} />} />
            <Route path="/seat-selection-module" component={SeatSelectionModule} />
            <Route path="/payment-module" component={PaymentModule} />
            <Route path="/ticket-confirmation-module" component={TicketConfirmationModule} />
          </Switch>
        </div >
      </div>
    </Router>
  );
}

export default App;
