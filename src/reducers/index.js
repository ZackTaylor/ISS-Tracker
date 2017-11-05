import { combineReducers } from 'redux';
import IssReducer from './IssReducer';

const rootReducer = combineReducers({
  iss: IssReducer
});

export default rootReducer;
