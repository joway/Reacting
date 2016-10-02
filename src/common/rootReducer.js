import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reduxApi from '../rest'

const rootReducer = combineReducers({
  ...reduxApi.reducers,
  routing: routerReducer
});

export default rootReducer;
