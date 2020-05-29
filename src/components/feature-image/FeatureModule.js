import React, { useState,useEffect} from 'react';
import classnames from 'classnames';

import './FeatureModule.css';

const FeatureModule = ({ tabNumber }) => {

    const [tab, setTab] = useState();

    useEffect(()=>{
        setTab(tabNumber)
    },[tab])

    console.log("New Value")
    console.log(tab)

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
                            <a className={classnames('nav-link', { active: tab === 1 })} href="#">1. Plan Your Travel</a>
                        </li>
                        <li className="nav-item">
                            <a className={classnames('nav-link', { active: tab === 2 })} href="#">2. Select Your Seats</a>
                        </li>
                        <li className="nav-item">
                            <a className={classnames('nav-link', { active: tab === 3 })} href="#">3. Payments</a>
                        </li>
                        <li className="nav-item">
                            <a className={classnames('nav-link', { active: tab === 4 })} href="#">4. Ticket Confirmation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeatureModule;