import { UPDATE_ISS_POSITION } from '../actions';

export default function(state = { coords: { lat: 0, lng: 0 } }, action) {
  switch (action.type) {
    case UPDATE_ISS_POSITION:
      return {
        center: state.center || [Number(action.payload.data.latitude), Number(action.payload.data.longitude)],
        coords: {
          lat: Number(action.payload.data.latitude),
          lng: Number(action.payload.data.longitude)
        }
      };

    default:
      return state;
  }
}
