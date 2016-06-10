import { combineReducers } from 'redux';
import PlansReducer from './reducer_plans'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  plans: PlansReducer,
  form: formReducer
});

export default rootReducer;
