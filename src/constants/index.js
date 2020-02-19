const FlightType = {
  CHEAP: 'CHEAP',
  BUSINESS: 'BUSINESS',
  ALL: 'ALL'
};

const DateTimeFormat = {
  display: 'MMMM Do YYYY, h:mm a'
};

const AsyncStatus = {
  IDLE: 'IDLE',
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

export { FlightType, DateTimeFormat, AsyncStatus };
export { default as ActionType } from './ActionType';
export { default as Label } from './Label';
