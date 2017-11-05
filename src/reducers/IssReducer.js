import { GET_ISS_POSITION } from '../actions';

export default function(state = { coords: { lat: 41.881832, lng: -87.6231 } }, action) {
  switch (action.type) {
    case GET_ISS_POSITION:
      return {
        coords: {
          lat: Number(action.payload.data.iss_position.latitude),
          lng: Number(action.payload.data.iss_position.longitude)
        }
      };

    default:
      return state;
  }
}
