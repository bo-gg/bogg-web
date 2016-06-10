import { FETCH_PLANS } from '../actions/index'; 

const INITIAL_STATE = { all: [], plan: null };

export default function(state = INITIAL_STATE, action) {
  
  switch(action.type) {
    case FETCH_PLANS:
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
}