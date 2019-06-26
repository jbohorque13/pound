import {
  LOADED_OPERATIONS_READY
} from '../actions/operations';
import operations from '../constants/operations';

const INITIAL_STATE = {
  operations: [],
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADED_OPERATIONS_READY:
      return {
        ...state,
        operations,
        loading: false
      }
    default:
      return state;
  }
}
