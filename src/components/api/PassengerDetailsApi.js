import axios from 'axios'

export function addPassengersDetails(passengerData) {
    let apiUrl = 'http://localhost:8080/passengers/upload'
    return axios.post(apiUrl, passengerData)
}
