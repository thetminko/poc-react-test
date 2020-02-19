import { ActionType, AsyncStatus } from "../../constants";

const initialState = {
  data: [],
  error: null,
  fetchFlightStatus: AsyncStatus.IDLE,
  addFlightStatus: AsyncStatus.IDLE
};

const FlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_FLIGHTS:
      return {
        ...initialState,
        fetchFlightStatus: AsyncStatus.IN_PROGRESS
      };
    case ActionType.FETCH_FLIGHTS_SUCCESS:
      return {
        ...state,
        fetchFlightStatus: AsyncStatus.SUCCESS,
        data: action.payload.data,
        error: null
      };
    case ActionType.FETCH_FLIGHTS_ERROR:
      return {
        ...state,
        fetchFlightStatus: AsyncStatus.ERROR,
        error: action.payload.error
      };
    case ActionType.ADD_FLIGHT:
      return {
        ...state,
        addFlightStatus: AsyncStatus.IN_PROGRESS
      };
    case ActionType.ADD_FLIGHT_SUCCESS:
      const data = [...state.data, action.payload.data];
      return {
        ...state,
        addFlightStatus: AsyncStatus.SUCCESS,
        data
      };
    default:
      return state;
  }
};

export default FlightReducer;