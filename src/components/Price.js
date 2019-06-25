import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CurrencySymbol } from './CurrencySymbol';

export const Price = ({ parCurrencyOnFocus }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CurrencySymbol currencySymbol={parCurrencyOnFocus.symbol} />
        <Text style={{ color: '#fff'}}>
            { parCurrencyOnFocus.BUY }
        </Text>
      </View>
      <View style={styles.row}>
        <CurrencySymbol currencySymbol={parCurrencyOnFocus.symbol} />
        <Text style={{ color: '#fff'}}>
          { parCurrencyOnFocus.SELL }
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    borderColor: 'blue',
    borderWidth: 1
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row'
  }
});
