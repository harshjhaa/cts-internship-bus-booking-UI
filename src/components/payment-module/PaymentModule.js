import React from 'react';
import "./PaymentModule.css"

const PaymentModule = () => {

    const renderPaymentForm = () => {
        return (
            <div className="container-fluid">
                <div className="payment-form-container">
                    <form>
                        <div class="form-row">
                            <div class=" col-md-3">
                                <label for="inputEmail4">Email</label>
                            </div>
                            <div class=" col-md-9">
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                        </div>
                        <div class="form-row form-group-spacing">
                            <div class=" col-md-3">
                                <label for="exampleInputPassword1" >Card Number</label>
                            </div>
                            <div class=" col-md-9">
                                <input type="text" class="form-control" maxlength="16" />
                            </div>
                        </div>
                        <div class="form-row form-group-spacing">
                            <div class="col-md-3">
                                <label for="exampleInputPassword1">Name On Card</label>
                            </div>
                            <div class="col-md-9">
                                <input type="text" maxlength="40" class="form-control" />
                            </div>
                        </div>
                        <div class="form-row form-group-spacing">
                            <div class="col-md-3">
                                <label for="exampleInputPassword1">CVV</label>
                            </div>
                            <div class="col-md-9">
                                <input type="password" maxlength="3" class="form-control" />
                            </div>
                        </div>
                        <div class="form-row form-group-spacing">
                            <div class="col-md-3">
                                <label for="exampleInputPassword1">Expiry Date</label>
                            </div>
                            <div class=" col-md-9">
                                <div class="form-row">
                                    <div class=" col-md-3">
                                        <select className="form-control">
                                            {["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map(n => <option value={n} key={n}>{n}</option>)}
                                        </select>
                                    </div>
                                    <div class="col-md-9">
                                        <input type="text" maxlength="4" class="form-control" placeholder="YYYY" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group-spacing">
                            <button type="submit" class="btn btn-sm btn-success">Submit</button>
                            <button type="submit" class="btn btn-sm btn-danger cancle-button-container">Cancle</button>
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
                        <tr className="table-danger">
                            <td>Amount: ₹3000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            {renderAmountField()}
            {renderPaymentForm()}
        </div>
    );
};

export default PaymentModule;