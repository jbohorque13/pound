export const LOADED_OPERATIONS_READY = 'LOADED_OPERATIONS_READY';
export const SAVE_OPERATION = 'SAVE_OPERATION';

export const loadedOperationsReady = () => ({
  type: LOADED_OPERATIONS_READY
});

export const saveOperation = ({ operation }) => ({
  type: SAVE_OPERATION,
  payload: {
    operation
  }
})
