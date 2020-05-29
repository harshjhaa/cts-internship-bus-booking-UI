import React from 'react';
import './FeatureModule.css';

const FeatureModule = () => {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap" rel="stylesheet" />
            <div className="image-container" style={{ backgroundImage: "url('./images/f-img-1.jpg')" }} >
                <h1>Bus World</h1>
                <div className="prev-next-button-container">
                    <a className="previous-button">Previous Page</a>
                    <a className="previous-button">Next Page</a>
                </div>
                <div className="nav-button-containers">
                    <ul className="nav nav-tabs justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">1. Plan Your Travel</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">2. Select Your Seats</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">3. Payments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">4. Ticket Confirmation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeatureModule;