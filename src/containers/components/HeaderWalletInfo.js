import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export const HeaderWalletInfo = ({ dataWallet = {}, priceBTCARS = null }) => {
  console.log('HeaderWalletInfo ', priceBTCARS);
  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>
          BTC
      </Text>
      <Text style={styles.descriptionWallet}>
        1 BTC = { priceBTCARS } ARS
      </Text>
      <Text>
        Mi Saldo { dataWallet.amountBTC } BTC
      </Text>
      <Text>
        { dataWallet.amountBTC * priceBTCARS } ARS
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionWallet: {
    fontFamily: 'Lato',
    color: Colors.textHome
  },
  titleApp: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: Colors.textHome,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 15
  },
})
