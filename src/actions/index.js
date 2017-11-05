import axios from 'axios';
export const GET_ISS_POSITION = 'GET_ISS_POSITION';

export const updateIssPosition = () => {
  const request = axios.get('http://api.open-notify.org/iss-now.json');
  return {
    type: GET_ISS_POSITION,
    payload: request
  };
};
