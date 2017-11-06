import { UPDATE_ISS_POSITION, TOGGLE_LOCK } from '../actions';

export default function(state = { lockOn: true, coords: { lat: 0, lng: 0 }, center: [0, 0] }, action) {
  switch (action.type) {
    case UPDATE_ISS_POSITION:
      return {
        ...state,
        center: state.lockOn
          ? [Number(action.payload.data.latitude), Number(action.payload.data.longitude)]
          : state.center,
        coords: {
          lat: Number(action.payload.data.latitude),
          lng: Number(action.payload.data.longitude)
        }
      };

    case TOGGLE_LOCK:
      return {
        ...state,
        lockOn: !state.lockOn
      };

    default:
      return state;
  }
}
