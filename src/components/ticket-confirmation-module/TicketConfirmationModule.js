import React from 'react';
import "./TicketConfirmationModule.css"

const TicketConfirmationModule = () => {

    const renderPassengerDetails = () => {
        return (
            <div>
                <div class="form-row">
                    <div class=" col-md-4">
                        <label  >Harsh Jha</label>
                    </div>
                    <div class=" col-md-4">
                        <label  >21</label>
                    </div>
                    <div class=" col-md-4">
                        <label  >Male</label>
                    </div>
                </div>

                <div class="form-row">
                    <div class=" col-md-4">
                        <label  >Riya</label>
                    </div>
                    <div class=" col-md-4">
                        <label  >20</label>
                    </div>
                    <div class=" col-md-4">
                        <label  >Female</label>
                    </div>
                </div>

                <div class="form-row">
                    <div class=" col-md-4">
                        <label  >Priya</label>
                    </div>
                    <div class=" col-md-4">
                        <label  >22</label>
                    </div>
                    <div class=" col-md-4">
                        <label  >Female</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class=" col-md-4">
                        <label  >Priya</label>
                    </div>
                    <div class=" col-md-4">
                        <label  >22</label>
                    </div>
                    <div class=" col-md-4">
                        <label  >Female</label>
                    </div>
                </div>
            </div>
        )
    }

    const renderTicketConfirmationModule = () => {
        return (
            <div className="ticket-confirmation-card">
                <div className="card border-danger mb-3">
                    <div className="card-header">
                        <div className="card-header-container-ticket-confirmation">
                            <p>Transaction ID: 12313221</p>
                            <div className="card-header-container-ticket-confirmation-download">
                                <p>Download PDF</p>
                                <span style={{marginLeft:5}}><i className="fa fa-arrow-down "></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div class="form-row">
                            <div class=" col-md-3">
                                <label  ><b>From</b></label>
                            </div>
                            <div class=" col-md-3">
                                <label  >Chennai</label>
                            </div>
                            <div class=" col-md-3">
                                <label  ><b>To</b></label>
                            </div>
                            <div class=" col-md-3">
                                <label  >Hyderabad</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class=" col-md-3">
                                <label  ><b>Departure Time</b></label>
                            </div>
                            <div class=" col-md-3">
                                <label  >15:00</label>
                            </div>
                            <div class=" col-md-3">
                                <label  ><b>Arrival Time</b></label>
                            </div>
                            <div class=" col-md-3">
                                <label  >21:00</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class=" col-md-3">
                                <label  ><b>Journey Date</b></label>
                            </div>
                            <div class=" col-md-3">
                                <label  >2020-05-30</label>
                            </div>
                            <div class=" col-md-3">
                                <label  ><b>Total Passengers</b></label>
                            </div>
                            <div class=" col-md-3">
                                <label  >2</label>
                            </div>
                        </div>
                        <div>
                            {renderPassengerDetails()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {renderTicketConfirmationModule()}
        </div>
    );
};

export default TicketConfirmationModule;