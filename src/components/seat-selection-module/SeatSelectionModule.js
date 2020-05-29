import React, { useState, useRef } from 'react';
import './SeatSelectionModule.css'

const SeatSelectionModule = () => {

    let gender;

    const passengerName = useRef(null)
    const passengerAge = useRef(null)

    const [passengerData, setPassengerData] = useState([])
    const [maxPassengers, setMaxPassengers] = useState()

    const [seats, setSeats] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const handleSeatSelectEvent = (value, seatNo) => {
        setSeats(seats[seatNo] = value);
    }

    const setSeatsData = () => {
        // let seatsArray = []
        // for (let i = 0; i < 40; i++) {
        //     for (let j = 1; j <= 10; j++) {
        //         if (seats[i] === false) {
        //             seatsArray.push(
        //                 <span key={i} className={styles.unbookedseats}>
        //                     <i onClick={e => { handleSeatSelectEvent(true, i) }} className='fa fa-bus' key={i} style={{ "margin-right": 15, cursor: 'pointer' }}></i>
        //                 </span>
        //             )
        //         } else {
        //             seatsArray.push(
        //                 <span style={{ cursor: 'pointer' }} key={i} className={styles.bookedseats}>
        //                     <i onClick={e => { handleSeatSelectEvent(false, i) }} className='fa fa-bus' key={i} key={i} style={{ "margin-right": 15, cursor: 'pointer' }}></i>
        //                 </span>
        //             )
        //         }
        //         if (j % 10 === 0) {
        //             break;
        //         }
        //         i++;
        //     }
        //     seatsArray.push(<br />)
        // }
        let seatsArray = []
        for (let i = 0; i < 40; i++) {
            if (seats[i] === false) {
                seatsArray.push(
                    <span key={i} className="unbookedseats">
                        <i onClick={e => { handleSeatSelectEvent(true, i) }} className='fa fa-bus' key={i} style={{ "margin-right": 15, cursor: 'pointer' }}></i>
                    </span>
                )
            } else {
                seatsArray.push(
                    <span style={{ cursor: 'pointer' }} key={i} className="bookedseats">
                        <i onClick={e => { handleSeatSelectEvent(false, i) }} className='fa fa-bus' key={i} key={i} style={{ "margin-right": 15, cursor: 'pointer' }}></i>
                    </span>
                )
            }
        }
        // seatsArray.push(<br />)
        return seatsArray
    }

    const setGender = (genderParameter) => {
        gender = genderParameter
    }

    const renderTripSummaryTabel = () => {
        return (
            <div>
                <table className="table table-sm table-bordered">
                    <tbody>
                        <tr className="table-danger">
                            <td>Bus Type: Volvo-AC</td>
                            <td>From: Bengluru</td>
                            <td>Departure Time: 15:00</td>
                            <td>To: Chennai</td>
                            <td>Arrival Time: 21:00</td>
                            <td>Date: 2020/05/29</td>
                        </tr>
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
        if (maxPassengers === 4) {
            alert("Only 5 tickets can be booked at a time")
        } else {
            let passengerDetails = {
                passengerName: passengerName.current.value,
                passengerAge: passengerAge.current.value,
                passengerGender: gender,
                passengerId: passengerName.current.value + "-" + passengerAge.current.value + "-" + passengerAge.current.value
            }
            setPassengerData(passengerData.concat(passengerDetails))
            passengerName.current.value = null;
            passengerAge.current.value = null;
        }
        setMaxPassengers(passengerData.length)
    }

    const fetchPassengerDetailsForm = () => {
        return (
            <div>
                <form onSubmit={e => { fetchPassengerData(e) }}>
                    <div className="row">
                        <div className="col-sm">
                            <input type="text" ref={passengerName} class="form-control form-control-sm" placeholder="Enter Name" />
                        </div>
                        <div className="col-sm">
                            <input type="number" ref={passengerAge} class="form-control form-control-sm" placeholder="Enter Age" />
                        </div>
                        <div className="col-sm">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" onClick={() => setGender('Male')} type="radio" name="gender" value="Male" />
                                <label class="form-check-label" for="inlineRadio1">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" onClick={() => setGender('Female')} type="radio" name="gender" value="Female" />
                                <label class="form-check-label" for="inlineRadio1">Female</label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-sm btn-danger">Add Passenger</button>
                    </div>
                </form>
            </div>
        )
    }

    const removePassenger = (pId) => {
        const newPassengerList = passengerData.filter((data) => data.passengerId != pId)
        setPassengerData(newPassengerList)
        console.log(passengerData)
    }

    const addPassengerToTable = () => {
        return passengerData.map((data) => {
            return (
                <tr>
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
        <div className="content-container">
            <div className="container trip-summary-table" style={{ "padding-left": 100, "padding-right": 100, marginTop: 20 }}>
                {renderTripSummaryTabel()}
            </div>
            <div className="container-fluid seat-passenger-details-fetcher" style={{ marginTop: 30, width: "90%", marginLeft: "auto", marginRight: "auto" }}>
                <div className="row">
                    <div className="col col-4">
                        <div>
                            {setSeatsData()}
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
    );
};

export default SeatSelectionModule;