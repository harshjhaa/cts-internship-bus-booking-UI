import React from 'react';
import currency from 'currency-symbol-map'
import LinkButton from '../LinkButton'
import "./TripDetailsTableModule.css"

const TripDetailsTableModule = (props) => {

    const sendData = (jData) => {
        if(props.receiveData){
            props.receiveData(jData)
        }
    }

    const renderTripDetailsTable = (planJourneyClicked, journeyData) => {
        if (planJourneyClicked) {
            const currencySymb = currency("INR")
            return (
                <div className="trip-details-table">
                    <div className="card card-body">
                        <table className="table table-sm">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Bus Type</th>
                                    <th>Departure</th>
                                    <th>Arrival</th>
                                    <th>Date</th>
                                    <th>Seats Available</th>
                                    <th>Fare</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {renderJourneyDetailsInTable()} */}
                                <tr>
                                    <td>Volvo-AC</td>
                                    <td>{journeyData.departLoc}</td>
                                    <td>{journeyData.arriveLoc}</td>
                                    <td>{journeyData.journeyDate}</td>
                                    <td>30</td>
                                    <td>{currencySymb}3000</td>
                                    {/* <Link to="/seat-selection-module"><td><button className="btn btn-sm btn-danger" onClick={e => { proceedNextPage() }} type="button" >Proceed</button></td></Link> */}
                                    <input class="form-check-input" onClick={e => { sendData(journeyData.departLoc+"-"+journeyData.arriveLoc+"-"+30+"-"+3000) }} type="radio" name="selected-bus" />
                                </tr>
                                <tr>
                                    <td>Volvo-AC</td>
                                    <td>{journeyData.departLoc}</td>
                                    <td>{journeyData.arriveLoc}</td>
                                    <td>{journeyData.journeyDate}</td>
                                    <td>30</td>
                                    <td>{currencySymb}3000</td>
                                    {/* <Link to="/seat-selection-module"><td><button className="btn btn-sm btn-danger" onClick={e => { proceedNextPage() }} type="button" >Proceed</button></td></Link> */}
                                    <input class="form-check-input" onClick={e => { sendData(journeyData.departLoc+"-"+journeyData.arriveLoc+"-"+30+"-"+3000) }} type="radio" name="selected-bus" />
                                </tr>
                                <tr>
                                    <td>Volvo-AC</td>
                                    <td>{journeyData.departLoc}</td>
                                    <td>{journeyData.arriveLoc}</td>
                                    <td>{journeyData.journeyDate}</td>
                                    <td>30</td>
                                    <td>{currencySymb}3000</td>
                                    {/* <Link to="/seat-selection-module"><td><button className="btn btn-sm btn-danger" onClick={e => { proceedNextPage() }} type="button" >Proceed</button></td></Link> */}
                                    <input class="form-check-input" onClick={e => { sendData(journeyData.departLoc+"-"+journeyData.arriveLoc+"-"+30+"-"+3000) }} type="radio" name="selected-bus" />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {renderTripDetailsTable(props.value, props.journeyData)}
        </div>
    );
};

export default TripDetailsTableModule;