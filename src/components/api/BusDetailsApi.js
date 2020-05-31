import axios from 'axios'

export function findAllBusses() {
    let apiUrl = 'http://localhost:8080/bus-details/bus-details'
    return axios.get(apiUrl)
}

export function findBusses(journeyData) {
    let apiUrl = 'http://localhost:8080/bus-details/bus-details'
    return axios.post(apiUrl, journeyData)
}