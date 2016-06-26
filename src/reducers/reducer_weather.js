import { FETCH_WEATHER } from '../actions/index.js';

export default function(state = [], action) {
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat(action.payload.data);
      //Similar to concat, uses ES6 sintax
      //adds the element at the beginning of array
      //return [ action.payload.data, ...state ];

  }
  return state;
}
