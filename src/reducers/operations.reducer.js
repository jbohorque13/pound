import {
  LOADED_OPERATIONS_READY,
  SAVE_OPERATION
} from '../actions/operations';
import operationsInitial from '../constants/operations';

const INITIAL_STATE = {
  operations: [],
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADED_OPERATIONS_READY:
      return {
        ...state,
        operations: operationsInitial.operations,
        loading: false
      }
    case SAVE_OPERATION:
      const operations = [action.payload.operation, ...state.operations];
      return {
        ...state,
        operations
      };
    default:
      return state;
  }
}
