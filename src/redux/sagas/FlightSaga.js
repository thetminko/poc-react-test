import { takeLeading, put, delay } from 'redux-saga/effects';
import { ActionType, FlightType } from '../../constants';
import { FlightAction } from '../action_creators';
import axios from 'axios';

const cheap = [{
  "departure": "Ankara", "arrival": "Antalya", "departureDateTime": 1561627856.000000000,
  "arrivalDateTime": 1564410656.000000000
}, {
  "departure": "Cruz del Eje", "arrival": "Tizi", "departureDateTime": 1558902656.000000000, "arrivalDateTime":
    1558902656.000000000
}, {
  "departure": "Antalya", "arrival": "Istanbul", "departureDateTime": 1563588000.000000000,
  "arrivalDateTime": 1563678000.000000000
}, {
  "departure": "Tizi", "arrival": "Cruz del Eje", "departureDateTime": 1558902656.000000000,
  "arrivalDateTime": 1558902656.000000000
}, {
  "departure": "Istanbul", "arrival": "Antalya", "departureDateTime": 1563588000.000000000,
  "arrivalDateTime": 1563678000.000000000
}, {
  "departure": "Istanbul", "arrival": "Antalya", "departureDateTime": 1558902656.000000000,
  "arrivalDateTime": 1558902656.000000000
}, {
  "departure": "Istanbul", "arrival": "Antalya", "departureDateTime": 1558902656.000000000,
  "arrivalDateTime": 1558902656.000000000
}, {
  "departure": "Singapore", "arrival": "Istanbul", "departureDateTime": 1563588000.000000000,
  "arrivalDateTime": 1563678000.000000000
}];

const business = [{ "departure": "Ankara", "arrival": "Antalya", "departureTime": 1561627856.000000000, "arrivalTime": 1564410656.000000000 }, { "departure": "Cruz del Eje", "arrival": "Tizi", "departureTime": 1558902656.000000000, "arrivalTime": 1558902656.000000000 }, { "departure": "Antalya", "arrival": "Istanbul", "departureTime": 1563588000.000000000, "arrivalTime": 1563678000.000000000 }, { "departure": "Tizi", "arrival": "Cruz del Eje", "departureTime": 1558902656.000000000, "arrivalTime": 1558902656.000000000 }, { "departure": "Istanbul", "arrival": "Antalya", "departureTime": 1563588000.000000000, "arrivalTime": 1563678000.000000000 }, { "departure": "Istanbul", "arrival": "Antalya", "departureTime": 1558902656.000000000, "arrivalTime": 1558902656.000000000 }, { "departure": "Istanbul", "arrival": "Antalya", "departureTime": 1558902656.000000000, "arrivalTime": 1558902656.000000000 }, { "departure": "Singapore", "arrival": "Istanbul", "departureTime": 1563588000.000000000, "arrivalTime": 1563678000.000000000 }];

export function* fetchFlights(action) {
  try {
    // call api
    // const response = yield axios.all([fetchCheapFlights(), fetchBusinessFlights()]);
    // console.log(response);
    const processedCheapFlights = processCheapFlightsData(cheap);
    const processedBusinessFlights = processBusinessFlightsData(business);
    yield put(FlightAction.onFetchFlightSuccess([...processedCheapFlights, ...processedBusinessFlights]));
  } catch (err) {
    console.log(err);
    // Will just display the generic error message for now
    const errorMsg = 'Oops! Something went wrong!';
    yield put(FlightAction.onFetchFlightError(errorMsg));
  }
}

function fetchCheapFlights() {
  return axios.get('...');
}

function fetchBusinessFlights() {
  return axios.get('...');
}

function processCheapFlightsData(data) {
  return data.map(flight => ({
    departure: flight.departure,
    arrival: flight.arrival,
    flightType: FlightType.CHEAP,
    departureDateTime: flight.departureDateTime,
    arrivalDateTime: flight.arrivalDateTime
  }));
}

function processBusinessFlightsData(data) {
  return data.map(flight => ({
    departure: flight.departure,
    arrival: flight.arrival,
    flightType: FlightType.BUSINESS,
    departureDateTime: flight.departureTime,
    arrivalDateTime: flight.arrivalTime
  }));
}

// to replicate async request
export function* addFlight(action) {
  yield delay(1000);
  yield put(FlightAction.onAddFlightSuccess(action.payload.data));
}

export default function* watchFlightSaga() {
  yield takeLeading(ActionType.FETCH_FLIGHTS, fetchFlights);
  yield takeLeading(ActionType.ADD_FLIGHT, addFlight);
}