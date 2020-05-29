import React from 'react';
import currency from 'currency-symbol-map'
import {Link} from 'react-router-dom'

const TripDetailsTableModule = (props) => {

    const proceedNextPage = () => {
        if(props.proceedToNextPage){
            props.proceedToNextPage()
        }
    }

    // console.log(props)
    const renderTripDetailsTable = (planJourneyClicked, journeyData) => {
        if (planJourneyClicked) {
            // console.log(journeyData);
            const currencySymb = currency("INR")
            return (
                <div style={{ backgroundColor: "whitesmoke" }}>
                    <div className="card card-body">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Bus Type</th>
                                    <th>Departure</th>
                                    <th>Arrival</th>
                                    <th>Date</th>
                                    <th>Seats Available</th>
                                    <th>Fare</th>
                                    <th>Proceed</th>
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
                                    <Link to="/seat-selection-module"><td><button className="btn btn-sm btn-danger" onClick={e => { proceedNextPage() }} type="button" >Proceed</button></td></Link>
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