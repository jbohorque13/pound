import {
  LOADED_OPERATIONS_READY,
  SAVE_OPERATION
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
    case SAVE_OPERATION:
      return {
        ...state,
        operation: [...state.operation, ...action.payload.operation]
      }
    default:
      return state;
  }
}
