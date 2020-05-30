import { Link } from 'react-router-dom'
import React, { useState, useRef } from 'react';
import LinkButton from '../LinkButton'
import "./PaymentModule.css"

const PaymentModule = () => {

    const [paymentDetails, setPaymentDetails] = useState([])

    const cardNumberField = useRef(null)
    const nameOnCardField = useRef(null)
    const cvvField = useRef(null)
    const expiryMonthField = useRef(null)
    const expiryYearField = useRef(null)

    const handlePaymentFormSubmit = () => {
        let paymentData = {
            cardNumber: cardNumberField.current.value,
            nameOnCard: nameOnCardField.current.value,
            expiryMonth: expiryMonthField.current.value,
            expiryYear: expiryYearField.current.value,
            cvv: cvvField.current.value,

        }
        setPaymentDetails(paymentData)
    }

    const handlePaymentFormReset = () => {
        // cardNumberField.current.value = null
        // nameOnCardField.current.value = null
        // expiryMonthField.current.value = "01"
        // expiryYearField.current.value = null
        // cvvField.current.value = null
    }

    const renderPaymentForm = () => {
        return (
            <div className="container-fluid">
                <div className="payment-form-container">
                    <form >
                        <div className="form-row form-group-spacing">
                            <div className=" col-md-3">
                                <label for="exampleInputPassword1" >Card Number</label>
                            </div>
                            <div className=" col-md-9">
                                <input type="text" className="form-control" maxlength="16" ref={cardNumberField} disabled={paymentDetails.length === 0 ? false : true} />
                            </div>
                        </div>
                        <div className="form-row form-group-spacing">
                            <div className="col-md-3">
                                <label for="exampleInputPassword1">Name On Card</label>
                            </div>
                            <div className="col-md-9">
                                <input type="text" maxlength="40" className="form-control" ref={nameOnCardField} disabled={paymentDetails.length === 0 ? false : true} />
                            </div>
                        </div>
                        <div className="form-row form-group-spacing">
                            <div className="col-md-3">
                                <label for="exampleInputPassword1">CVV</label>
                            </div>
                            <div className="col-md-9">
                                <input type="password" maxlength="3" className="form-control" ref={cvvField} disabled={paymentDetails.length === 0 ? false : true} />
                            </div>
                        </div>
                        <div className="form-row form-group-spacing">
                            <div className="col-md-3">
                                <label for="exampleInputPassword1">Expiry Date</label>
                            </div>
                            <div className=" col-md-9">
                                <div className="form-row">
                                    <div class=" col-md-3">
                                        <select className="form-control" ref={expiryMonthField} disabled={paymentDetails.length === 0 ? false : true}>
                                            {["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map(n => <option value={n} key={n}>{n}</option>)}
                                        </select>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" maxlength="4" className="form-control" placeholder="YYYY" ref={expiryYearField} disabled={paymentDetails.length === 0 ? false : true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group-spacing reset-cancle-button-container">
                            <button type="button" onClick={e => handlePaymentFormSubmit()} className="btn btn-success " disabled={paymentDetails.length === 0 ? false : true}>Pay</button>
                            <button type="button" onClick={e => handlePaymentFormReset()} className="btn btn-warning " disabled={paymentDetails.length === 0 ? false : true}>Reset</button>
                            <Link to="/seat-selection-module"><button type="button" className="btn  btn-danger " disabled={paymentDetails.length === 0 ? false : true}>Cancle & Go Back</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    const renderAmountField = () => {
        return (
            <div className="amount-field">
                <table className="table table-sm table-bordered">
                    <tbody>
                        <tr className={paymentDetails.length === 0 ? "table-danger" : "table-success"}>
                            <td>Amount: ₹3000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            <div className="prev-next-container">
                {/* <Link to="/seat-selection-module"><button className="btn btn-danger" disabled>Previous Page</button></Link> */}
                <LinkButton disabled>Previous Page</LinkButton>
                {renderAmountField()}
                <LinkButton disabled={paymentDetails.length === 0 ? true : false} to='/ticket-confirmation-module'>Next Page</LinkButton>
            </div>
            {renderPaymentForm()}
        </div>
    );
};

export default PaymentModule;