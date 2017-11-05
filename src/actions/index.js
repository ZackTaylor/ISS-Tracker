import axios from 'axios';

export const UPDATE_ISS_POSITION = 'UPDATE_ISS_POSITION';

export const updateIssPosition = () => {
  const request = axios.get('https://api.wheretheiss.at/v1/satellites/25544?units=miles');
  return {
    type: UPDATE_ISS_POSITION,
    payload: request
  };
};
