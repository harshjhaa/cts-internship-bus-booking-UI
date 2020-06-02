import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Body from './components/body/Body'
import Navbar from './components/navbar/Navbar'

import FeatureModule from './components/feature-module/FeatureModule'
import FromToDateModule from './components/from-to-date-module/FromToDateModule';
import SeatSelectionModule from './components/seat-selection-module/SeatSelectionModule';
import PaymentModule from './components/payment-module/PaymentModule';
import TicketConfirmationModule from './components/ticket-confirmation-module/TicketConfirmationModule';



function App() {

  // const [newTab, setNewTab] = useState(1)
  // function proceed(tabNo) {
  //   setNewTab(tabNo)
  //   console.log("Clicked")
  //   console.log(tabNo)
  //   console.log(newTab)
  // }

  const [selectedBusId, setSelectedBusId] = useState()
  const handleSelectedBusId = (id) => {
    setSelectedBusId(id)
  }

  const [passengersData, setPassengersData] = useState()
  const handlePassengerData = (data) => {
    setPassengersData(data)
  }

  const [transactionId, setTransactionId] = useState()
  const handleTransactionId = (data) => {
    setTransactionId(data)
  }

  return (
    <Router>
      <div >
        <Navbar />
        {/* <Body /> */}
        <div className="body-contents">
          <FeatureModule /* tabNumber={newTab} */ />
          <Switch>
            <Route path="/from-date-to-module"
              render={props => <FromToDateModule {...props} getSelectedBusId={data => handleSelectedBusId(data)}
              /* proceedToNextPage={e => proceed(2)} */ />}
            />
            <Route path="/seat-selection-module"
              render={props => <SeatSelectionModule {...props} busId={selectedBusId}
              passengersDataObj={data => handlePassengerData(data)} />}
            />
            <Route path="/payment-module" render={props => <PaymentModule {...props}
              passengersData={passengersData} selectedBusId={selectedBusId}
              receiveTransactionId={data => handleTransactionId(data)} />}
            />
            <Route path="/ticket-confirmation-module" render={props => <TicketConfirmationModule {...props}
              transactionId={transactionId} />} />
          </Switch>
        </div >
      </div>
    </Router>
  );
}

export default App;
