import axios from 'axios'

// export function getBookedPassengersDetails(transactionId) {
//     let apiUrl = 'http://localhost:8080/passengers/get-passengers/tid'
//     return axios.post(apiUrl, { transactionId })
// }

// export function getBookingHistory(transactionId) {
//     let apiUrl = 'http://localhost:8080/booking-history/get-history/tid'
//     return axios.post(apiUrl, { transactionId })
// }

export function getBookedPassengersDetails(transactionId) {
    let apiUrl = 'http://localhost:8080/passengers/get-passengers/tid'
    return axios.post(apiUrl, {transactionId}, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function getBookingHistory(transactionId) {
    let apiUrl = 'http://localhost:8080/booking-history/get-history/tid'
    return axios.post(apiUrl, {transactionId}, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

