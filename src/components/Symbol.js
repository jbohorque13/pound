import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Colors from '../constants/colors';

export const Symbol = ({ parCurrencyBTC, parCurrencyOnFocus, onChangeCurrencyOnFocus = () => null }) => {
  return (
    <TouchableOpacity onPress={() => onChangeCurrencyOnFocus(parCurrencyBTC)}>
    { parCurrencyBTC.currency === parCurrencyOnFocus.currency ?
      <Text style={[styles.textSymbol, { color: Colors.second }]}>
        BTC / { parCurrencyBTC.currency }
      </Text> : <Text style={styles.textSymbol}>
        BTC / { parCurrencyBTC.currency }
      </Text>
    }
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  textSymbol: {
    fontFamily: 'Lato',
    fontWeight: '100',
    color: Colors.textHome
  }
})
