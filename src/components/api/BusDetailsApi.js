import axios from 'axios'

export function findAllBusses() {
    let apiUrl = 'http://localhost:8080/bus/bus-details'
    return axios.get(apiUrl)
}

export function findBusses(journeyData) {
    let apiUrl = 'http://localhost:8080/bus/bus-details/loc'
    return axios.post(apiUrl, journeyData)
}

export function findBusDetailsById(busId){
    let apiUrl = 'http://localhost:8080/bus/bus-details/id'
    return axios.post(apiUrl, busId)
}