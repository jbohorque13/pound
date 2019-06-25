import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CurrencySymbol } from './CurrencySymbol';

export const Price = ({ parCurrencyOnFocus }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection:'column' }}>
        <View style={styles.row}>
          <CurrencySymbol currencySymbol={parCurrencyOnFocus.symbol} />
          <Text style={styles.priceText}>
              { parCurrencyOnFocus.BUY }
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.messageText}>
          Precio del Bitcoin a la compra
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection:'column' }}>
        <View style={styles.row}>
          <CurrencySymbol currencySymbol={parCurrencyOnFocus.symbol} />
          <Text style={styles.priceText}>
            { parCurrencyOnFocus.SELL }
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.messageText}>
          Precio del Bitcoin a la venta
          </Text>
        </View>
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
    alignItems: 'center',
    flexDirection: 'row'
  },
  priceText: {
    fontFamily: 'Lato',
    color: '#fff',
    fontSize: 18
  },
  messageText: {
    fontSize: 8,
    color: '#fff',
    textAlign: 'center'
  }
});
