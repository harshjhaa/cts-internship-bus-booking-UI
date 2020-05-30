import React, { useState, useRef } from 'react';
import LinkButton from '../LinkButton'
import TripDetailsTableModule from '../trip-details-table-module/TripDetailsTableModule';
import './FromToDateModule.css';
import '../global.css'

const FromToDateModule = ({ proceedToNextPage }) => {

    const [planJourneyClicked, setPlanJourneyClicked] = useState(false);
    const [journeyData, setJourneyData] = useState({});
    const [busData, setBusData] = useState(null);
    const [enableNextButton, setEnableNextButton] = useState(false);

    const departCityField = useRef(null)
    const arrivalCityField = useRef(null)
    const journeyDateField = useRef(null)

    const checkBusSelection = (data) => {
        if (data !== null) {
            setBusData(data)
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
                let journeyD = {
                    departLoc: departCityField.current.value,
                    arriveLoc: arrivalCityField.current.value,
                    journeyDate: journeyDateField.current.value
                }
                setJourneyData(journeyD)
                // console.log(journeyData)
                tooglePlanJourney(true)
            }
        }
    }

    /*     const handleSubmit = (e) => {
            e.preventDefault()
    
    
            let journeyD = {
                departLoc: departCityField.current.value,
                arriveLoc: arrivalCityField.current.value,
                journeyDate: journeyDateField.current.value
            }
            setJourneyData(journeyD)
            // console.log(journeyData)
            tooglePlanJourney(true)
    
        } */

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
                    <form className="form-inline">
                        <div className="form-group">
                            <label><b>From</b></label>
                            <select ref={departCityField} className="form-control">
                                {["Select City", "Bengluru", "Chennai", "Hyderabad"].map(n => <option value={n} key={n}>{n}</option>)}
                            </select>
                        </div>
                    </form>
                    <form className="form-inline">
                        <div className="form-group">
                            <label><b>To</b></label>
                            <select ref={arrivalCityField} className="form-control">
                                {["Select City", "Bengluru", "Chennai", "Hyderabad"].map(n => <option value={n} key={n}>{n}</option>)}
                            </select>
                        </div>
                    </form>
                    <div className="date-content">
                        <input id="journey-date" type="date" ref={journeyDateField} ></input>
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
            <TripDetailsTableModule value={planJourneyClicked} journeyData={journeyData} receiveData={data => checkBusSelection(data)} />
        </div>
    );
};

export default FromToDateModule;