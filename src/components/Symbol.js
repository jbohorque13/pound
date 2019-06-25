import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/colors';

export const Symbol = ({ parCurrencyBTC, parCurrencyOnFocus, onChangeCurrencyOnFocus = () => null }) => {
  console.log(parCurrencyBTC);
  return (
    <TouchableOpacity onPress={() => onChangeCurrencyOnFocus(parCurrencyBTC)}>
    { parCurrencyBTC.currency === parCurrencyOnFocus.currency ?
      <Text style={{ color: Colors.second }}>
      BTC / { parCurrencyBTC.currency }
      </Text> : <Text style={{ color: Colors.textHome }}>
      BTC / { parCurrencyBTC.currency }
      </Text>
    }
    </TouchableOpacity>
  )

}
