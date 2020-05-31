import React, { useState, useRef, useEffect } from 'react';
import currency from 'currency-symbol-map'
import LinkButton from '../LinkButton'
import * as busDetailsApi from '../api/BusDetailsApi'
import './SeatSelectionModule.css'

const SeatSelectionModule = ({ busId }) => {

    let gender;

    const passengerName = useRef(null)
    const passengerAge = useRef(null)
    const passengerGenderFemale = useRef(null)
    const passengerGenderMale = useRef(null)

    const [passengerData, setPassengerData] = useState([])

    const [busIdObj] = useState({ "busId": busId })

    const [busDataFromServer, setBusDataFromServer] = useState([])

    useEffect(() => {
        busDetailsApi.findBusDetailsById(busIdObj)
            .then(response => response.data)
            .then(data => {
                console.log("Data from mongoDB SeatSelectionModule")
                console.log(data)
                setBusDataFromServer(data)
            })
    }, [])

    const setGender = (genderParameter) => {
        gender = genderParameter
    }

    const renderTripSummaryTableRow = () => {
        const currencySymb = currency("INR")
        return busDataFromServer.map((data, index) => {
            return (
                <tr key={index} className="table-danger">
                    <td>Bus Type: {data.busType}</td>
                    <td>From: {data.departLoc}</td>
                    <td>Departure {data.departTime}</td>
                    <td>To: {data.arriveLoc}</td>
                    <td>Arrival Time: {data.arriveTime}</td>
                    <td>Date: {data.departDate}</td>
                    <td>Fare: {currencySymb}{data.fare}</td>
                </tr>
            )
        })
    }

    const renderTripSummaryTabel = () => {
        return (
            <div className="trip-summary-table">
                <table className="table table-sm table-bordered">
                    <tbody>
                        {renderTripSummaryTableRow()}
                    </tbody>
                </table>
            </div>
        )
    }

    const fetchPassengerData = (e) => {
        e.preventDefault();
        // if (passengerName.current.value === "" || passengerAge.current.value === "" || gender === undefined) {
        //     alert("Please fill all details")
        // } else {
        //     if (totalPassengers === 5) {
        //         alert("Only 5 tickets can be booked at a time")
        //     } else {
        //         let passengerDetails = {
        //             passengerName: passengerName.current.value,
        //             passengerAge: passengerAge.current.value,
        //             passengerGender: gender,
        //             passengerId: passengerName.current.value + "-" + passengerAge.current.value + "-" + passengerAge.current.value
        //         }
        //         setPassengerData(passengerData.concat(passengerDetails))
        //         passengerName.current.value = null;
        //         passengerAge.current.value = null;
        //         totalPassengers = passengerData.length
        //         setTotalPassengers(totalPassengers)
        //     }
        // }
        let passengerDetails = {
            passengerName: passengerName.current.value,
            passengerAge: passengerAge.current.value,
            passengerGender: gender,
            passengerId: passengerName.current.value + "-" + passengerAge.current.value + "-" + passengerAge.current.value
        }
        // setPassengerData({passengerData:passengerData.concat(passengerDetails)})
        setPassengerData(passengerData.concat(passengerDetails))
        console.log(passengerData)
        passengerName.current.value = null;
        passengerAge.current.value = null;
        passengerGenderFemale.current.checked = false;
        passengerGenderMale.current.checked = false;
    }

    const fetchPassengerDetailsForm = () => {
        return (
            <div>
                <form onSubmit={e => { fetchPassengerData(e) }}>
                    <div className="row">
                        <div className="col-sm">
                            <input type="text" ref={passengerName} class="form-control form-control-sm" placeholder="Enter Name" required />
                        </div>
                        <div className="col-sm">
                            <input type="number" ref={passengerAge} class="form-control form-control-sm" placeholder="Enter Age" required />
                        </div>
                        <div className="col-sm">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" ref={passengerGenderMale} onClick={() => setGender('Male')} type="radio" name="gender" value="Male" required />
                                <label class="form-check-label" for="inlineRadio1">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" ref={passengerGenderFemale} onClick={() => setGender('Female')} type="radio" name="gender" value="Female" required />
                                <label class="form-check-label" for="inlineRadio1">Female</label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-sm btn-danger" disabled={passengerData.length === 4 ? true : false}>Add Passenger</button>
                    </div>
                </form>
            </div>
        )
    }

    const removePassenger = (pId) => {
        const newPassengerList = passengerData.filter((data) => data.passengerId !== pId)
        setPassengerData(newPassengerList)
        console.log(passengerData)
    }

    // console.log(passengerData)
    const addPassengerToTable = () => {
        return passengerData.map((data, index) => {
            return (
                <tr key={index} className={passengerData.length === 4 ? 'table-danger' : ''}>
                    <td>{data.passengerName}</td>
                    <td>{data.passengerGender}</td>
                    <td>{data.passengerAge}</td>
                    <td><span className="bookedseats"><i className='fa fa-close' onClick={e => removePassenger(data.passengerId)} style={{ cursor: 'pointer' }}></i></span></td>
                </tr >
            )
        })
    }

    const renderPassengerNameGenderTabel = () => {
        return (
            <div className="table-responsive">
                <table className="table table-sm table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Passenger Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            {/* <th></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {addPassengerToTable()}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            <div className="prev-next-container">
                <LinkButton to='/from-date-to-module'>Previous Page</LinkButton>
                {renderTripSummaryTabel()}
                <LinkButton to='/payment-module' disabled={passengerData.length === 0 ? true : false}>Next Page</LinkButton>
            </div>
            <div className="content-container">
                <div className="container-fluid seat-passenger-details-fetcher" style={{ marginTop: 30, width: "90%", marginLeft: "auto", marginRight: "auto" }}>
                    <div className="row">
                        <div className="col col-4">
                            <div>
                                {/* {setSeatsData()} */}
                            </div>
                        </div>
                        <div className="col col-8">
                            <div>
                                {/* <h4 style={{ textAlign: 'center' }}>Passenger Details</h4> */}
                                {fetchPassengerDetailsForm()}
                                <br />
                                {renderPassengerNameGenderTabel()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatSelectionModule;