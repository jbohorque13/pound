import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CurrencySymbol } from './CurrencySymbol';

export const Price = ({ parCurrencyOnFocus }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CurrencySymbol currencySymbol={parCurrencyOnFocus.symbol} />
        <Text style={styles.priceText}>
            { parCurrencyOnFocus.BUY }
        </Text>
      </View>
      <View style={styles.row}>
        <CurrencySymbol currencySymbol={parCurrencyOnFocus.symbol} />
        <Text style={styles.priceText}>
          { parCurrencyOnFocus.SELL }
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 10
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  priceText: {
    fontFamily: 'Lato',
    color: '#fff',
    fontSize: 18
  }
});
