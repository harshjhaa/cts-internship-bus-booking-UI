import React, { useState, useEffect } from 'react';
import * as ticketConfirmationApi from '../api/TicketConfirmationApi';
// import * as busDetailsApi from '../api/BusDetailsApi';
import "./TicketConfirmationModule.css"

const TicketConfirmationModule = ({ transactionId }) => {

    // console.log(transactionId)

    const [bookingHistory, setBookingHistory] = useState([])
    const [bookedPassengers, setBookedPassengers] = useState([])

    // const [transactionIdObj] = useState({ "transactionId": transactionId })

    useEffect(() => {

        ticketConfirmationApi.getBookingHistory(transactionId)
            .then(response => response.data)
            .then(data => {
                console.log("Data from mongoDB History")
                console.log(data)
                setBookingHistory(data)
            })

        ticketConfirmationApi.getBookedPassengersDetails(transactionId)
            .then(response => response.data)
            .then(data => {
                console.log("Data from mongoDB PassengeDetails")
                console.log(data)
                setBookedPassengers(data)
            })
    }, [])

    const renderJourneyDetails = (bookingHistory) => {
        return bookingHistory.map((data, index) => {
            console.log(data.departLoc)
            return (
                <div key={index}>
                    <div className="form-row">
                        <div className=" col-md-3">
                            <label  ><b>From</b></label>
                        </div>
                        <div className=" col-md-3">
                            <label  >{data.departLoc}</label>
                        </div>
                        <div className=" col-md-3">
                            <label  ><b>To</b></label>
                        </div>
                        <div className=" col-md-3">
                            <label  >{data.arriveLoc}</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className=" col-md-3">
                            <label  ><b>Departure Time</b></label>
                        </div>
                        <div className=" col-md-3">
                            <label  >{data.departTime}</label>
                        </div>
                        <div className=" col-md-3">
                            <label  ><b>Arrival Time</b></label>
                        </div>
                        <div className=" col-md-3">
                            <label  >{data.arriveTime}</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className=" col-md-3">
                            <label  ><b>Journey Date</b></label>
                        </div>
                        <div className=" col-md-3">
                            <label  >{(data.departDate).substring(0, 10)}</label>
                        </div>
                        <div className=" col-md-3">
                            <label  ><b>Total Passengers</b></label>
                        </div>
                        <div className=" col-md-3">
                            <label  >{data.passengerCount}</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className=" col-md-3">
                            <label  ><b>Individual Fare</b></label>
                        </div>
                        <div className=" col-md-3">
                            <label  >{data.fare}</label>
                        </div>
                        <div className=" col-md-3">
                            <label  ><b>Total Fare</b></label>
                        </div>
                        <div className=" col-md-3">
                            <label  >{data.totalFare}</label>
                        </div>
                    </div>
                </div>
            )
        })
    }

    const renderPassengerDetails = (bookedPassengers) => {
        return bookedPassengers.map((data, index) => {
            return (
                <div key={index} className="form-row">
                    <div className=" col-md-4">
                        <label  >{data.passengerName}</label>
                    </div>
                    <div className=" col-md-4">
                        <label  >{data.passengerAge}</label>
                    </div>
                    <div className=" col-md-4">
                        <label  >{data.passengerGender}</label>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <div className="ticket-confirmation-card">
                <div className="card border-danger mb-3">
                    <div className="card-header">
                        <div className="card-header-container-ticket-confirmation">
                            <p><span><b>Transaction ID</b></span>: {transactionId}</p>
                            <div className="card-header-container-ticket-confirmation-download">
                                <p>Download PDF</p>
                                <span style={{ marginLeft: 5 }}><i className="fa fa-arrow-down "></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div>
                            <div>
                                {renderJourneyDetails(bookingHistory)}
                            </div>
                            <hr/>
                            <div>
                                {renderPassengerDetails(bookedPassengers)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketConfirmationModule;