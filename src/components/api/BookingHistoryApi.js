import axios from 'axios'

export function createBookingHistory(selectedBusIdAndTransactionIdCollection) {
    let apiUrl = "http://localhost:8080/booking-history/create-booking-history"
    return axios.post(apiUrl, selectedBusIdAndTransactionIdCollection)
}