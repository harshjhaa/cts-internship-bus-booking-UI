import React from 'react';
import currency from 'currency-symbol-map'
import LinkButton from '../LinkButton'
import "./TripDetailsTableModule.css"

const TripDetailsTableModule = ({ planJourneyClicked, journeyData, receiveData }) => {

    const sendData = (jData) => {
        if (receiveData) {
            receiveData(jData)
        }
    }
    console.log(journeyData)
    const renderJourneyDetailsInTable = () => {
        const currencySymb = currency("INR")
        return journeyData.map((data, index) => {
             return (
                 <tr key={index}>
                     <td>{data.busType}</td>
                     <td>{data.departLoc}</td>
                     <td>{data.arriveLoc}</td>
                     <td>{data.departDate}</td>
                     <td>{data.seatsAvailable}</td>
                     <td>{currencySymb}{data.fare}</td>
                     <input class="form-check-input" onClick={e => { sendData(data.busId) }} type="radio" name="selected-bus" />
                 </tr>
             )
         })
         
    }

    const renderTripDetailsTable = (planJourneyClicked) => {
        if (planJourneyClicked) {
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
                                {renderJourneyDetailsInTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {renderTripDetailsTable(planJourneyClicked)}
        </div>
    );
};

export default TripDetailsTableModule;
{/* <Link to="/seat-selection-module"><td><button className="btn btn-sm btn-danger" onClick={e => { proceedNextPage() }} type="button" >Proceed</button></td></Link> */ }