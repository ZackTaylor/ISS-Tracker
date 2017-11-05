import { GET_ISS_POSITION } from '../actions';

export default function(state = { coords: { lat: 0, lng: 0 } }, action) {
  switch (action.type) {
    case GET_ISS_POSITION:
      return {
        coords: {
          lat: Number(action.payload.data.latitude),
          lng: Number(action.payload.data.longitude)
        }
      };

    default:
      return state;
  }
}
