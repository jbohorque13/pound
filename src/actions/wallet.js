export const LOADED_DATA_WALLET = 'LOADED_DATA_WALLET';
export const CHANGE_DATA_WALLET = 'CHANGE_DATA_WALLET';

export const loadedDataWallet = () => ({
  type: LOADED_DATA_WALLET
})

export const changeDataWallet = ( amountBTC ) => ({
  type: CHANGE_DATA_WALLET,
  payload: {
    amountBTC
  }
})
