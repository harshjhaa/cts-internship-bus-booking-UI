import React, { useState, useRef } from 'react';
import LinkButton from '../LinkButton'
import TripDetailsTableModule from '../trip-details-table-module/TripDetailsTableModule';
import './FromToDateModule.css';
import '../global.css'

import * as busDetailsApi from '../api/BusDetailsApi'

const FromToDateModule = ({ proceedToNextPage, getSelectedBusId }) => {

    //to store the bus details enterd by customer
    const [busJourneyData, setBusJourneyData] = useState({})

    //to store the bus details received from server
    const [busDataFromServer, setBusDataFromServer] = useState([])

    //to store the boolean value to enable the next button only if user selected any bus
    const [planJourneyClicked, setPlanJourneyClicked] = useState(false);

    //used to store the bus-id selected by the customer
    const [selectedBusId, setSelectedBusId] = useState(null);

    //to store the boolean value to check weather plan journey button is clicked or not
    const [enableNextButton, setEnableNextButton] = useState(false);

    const departCityField = useRef(null)
    const arrivalCityField = useRef(null)
    const journeyDateField = useRef(null)

    const handleJourneyFieldEvent = (e, field) => {
        let fieldValue = e.target.value
        setBusJourneyData({ ...busJourneyData, [field]: fieldValue })
    }

    if (getSelectedBusId) {
        getSelectedBusId(selectedBusId)
    }

    const checkBusSelection = (selectedBusID) => {
        if (selectedBusID !== null) {
            console.log(selectedBusID)
            setSelectedBusId(selectedBusID)
            setEnableNextButton(true)
        } else {
            setEnableNextButton(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (departCityField.current.value === null || departCityField.current.value === "Select City" || arrivalCityField.current.value === null || arrivalCityField.current.value === "Select City") {
            alert("Please fill all the fields!")
        } else {
            if (departCityField.current.value === arrivalCityField.current.value) {
                alert("Departure City and Arrival City can't be same!")
            } else {
                // busDetailsApi.findAllBusses()
                //     .then(response => response.data)
                //     .then(data => {
                //         console.log("Data from mongoDB")
                //         console.log(data)
                //     })

                busDetailsApi.findBusses(busJourneyData)
                    .then(response => response.data)
                    .then(data => {
                        console.log("Data from mongoDB")
                        console.log(data)
                        setBusDataFromServer(data)
                    })

                tooglePlanJourney(true)
            }
        }
    }

    const tooglePlanJourney = (toogle) => {
        setPlanJourneyClicked(toogle);
        if (toogle === false) {
            departCityField.current.value = "Select City"
            arrivalCityField.current.value = "Select City"
            journeyDateField.current.value = null;
        }
        setEnableNextButton(false)
    }

    const renderFromToDateModule = () => {
        return (
            <div >
                <form className="from-to-date-content d-flex justify-content-around" onSubmit={e => handleSubmit(e)}>
                    <div className="form-inline">
                        <div className="form-group">
                            <label><b>From</b></label>
                            <select ref={departCityField} className="form-control" onChange={e => handleJourneyFieldEvent(e, 'departLoc')}>
                                {["Select City", "Bengluru", "Chennai", "Hyderabad"].map(n => <option value={n} key={n}>{n}</option>)}
                            </select>
                            {/* <input type="text" maxlength="30" ref={departCityField} onChange={e => handleJourneyFieldEvent(e, 'departLoc')} className="form-control" name="departLoc" /> */}
                        </div>
                    </div>
                    <div className="form-inline">
                        <div className="form-group">
                            <label><b>To</b></label>
                            <select ref={arrivalCityField} className="form-control" onChange={e => handleJourneyFieldEvent(e, 'arriveLoc')}>
                                {["Select City", "Bengluru", "Chennai", "Hyderabad"].map(n => <option value={n} key={n}>{n}</option>)}
                            </select>
                            {/* <input type="text" maxlength="30" ref={arrivalCityField} onChange={e => handleJourneyFieldEvent(e, 'arriveLoc')} className="form-control" name="arriveLoc" /> */}
                        </div>
                    </div>
                    <div className="date-content">
                        <input id="journey-date" type="date" ref={journeyDateField} onChange={e => handleJourneyFieldEvent(e, 'departDate')} ></input>
                    </div>
                    <div>
                        <button className="btn btn-danger btn-sm" type="submit" >Plan Journey</button>
                        <button className="btn btn-danger btn-sm" style={{ "margin-left": "20px" }} type="button" onClick={e => tooglePlanJourney(false)}>Reset</button>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div>
            <div className="prev-next-container">
                <LinkButton disabled>Previous Page</LinkButton>
                <p style={{ textSize: "50px" }}>BOOK <span style={{ color: '#e60505' }}>TICKETS</span>NOW</p>
                <LinkButton to='/seat-selection-module' disabled={enableNextButton ? false : true}>Next Page</LinkButton>
            </div>
            <div style={{ backgroundColor: "whitesmoke" }}>
                {renderFromToDateModule()}
            </div>
            <TripDetailsTableModule planJourneyClicked={planJourneyClicked} journeyData={busDataFromServer} receiveData={selectedBusID => checkBusSelection(selectedBusID)} />
        </div>
    );
};

export default FromToDateModule;