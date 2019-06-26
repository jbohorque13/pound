import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../constants/colors';

export const HeaderWalletInfo = ({ dataWallet = {}, priceBTCARS = null }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>
          BTC
      </Text>
      <View style={styles.containerInfoWallet}>
        <Text style={styles.descriptionWallet}>
          1 BTC = { priceBTCARS } ARS
        </Text>
        <Text style={styles.descriptionWallet}>
          Mi Saldo { dataWallet.amountBTC } BTC
        </Text>
        <Text style={styles.descriptionWallet}>
          { dataWallet.amountBTC * priceBTCARS } ARS
        </Text>
      </View>
      <View style={styles.containerIconsOperations}>
        <View style={styles.containerIconOption}>
          <Image style={styles.image} source={require('../../../assets/images/mail.png')} />
          <Text style={styles.textIcon}>
              Enviar
          </Text>
        </View>
        <View style={styles.containerIconOption}>
          <Image style={styles.image} source={require('../../../assets/images/incomes.png')} />
          <Text style={styles.textIcon}>
              Recibir
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 20,
    borderColor: '#f5f5f5'
  },
  containerInfoWallet: {
    paddingBottom: 20,
    alignItems: 'center'
  },
  descriptionWallet: {
    fontFamily: 'Lato',
    color: Colors.textHome,
    marginVertical: 2
  },
  titleApp: {
    fontFamily: 'Lato-Bold',
    fontSize: 28,
    color: Colors.textHome,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  containerIconsOperations: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50
  },
  containerIconOption: {
    marginHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  textIcon: {
    fontFamily: 'Lato-Bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 15
  }
})
