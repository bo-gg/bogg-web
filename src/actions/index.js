import axios from 'axios';

export const FETCH_PLANS = 'FETCH_PLANS';
export const CREATE_PLAN = 'CREATE_PLAN';

export const BASE_URL = "http://localhost:8000/";
export const USER = 'circleci';
export const PASSWORD = 'Vjk6wyEXbYat3U';
export const REPOSITORY_ID = 1;
const AUTH_TOKEN = '9ba7134691f3e5188fc623eec430512c05e47ef1';

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {'Authorization': `Token ${AUTH_TOKEN}`}
});

export function fetchPlans() {
  console.log('Fetching plans!');
  const request = API.get('api/plans/');
  return {
    type: FETCH_PLANS,
    payload: request
  };
}

export function createPlan(props) {
  const request = API.post('api/plans/', props);
  return {
    type: CREATE_PLAN,
    payload: request
  }
}
