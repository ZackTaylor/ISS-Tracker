import axios from 'axios';
export const GET_ISS_POSITION = 'GET_ISS_POSITION';

export const updateIssPosition = () => {
  const request = axios.get('https://api.wheretheiss.at/v1/satellites/25544?units=miles');
  return {
    type: GET_ISS_POSITION,
    payload: request
  };
};
