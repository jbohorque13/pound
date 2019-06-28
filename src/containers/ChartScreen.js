import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { loadedPrices, changeCurrencyOnFocus } from '../actions/btc';
import { loadedOperationsReady } from '../actions/operations';
import Color from '../constants/colors';
import { BarSymbols } from './components/BarSymbols';
import { Price } from '../components/Price';
import { ChartCustom } from '../components/Chart';

class ChartScreen extends Component {
  static navigationOptions = () => {
    return {
      headerStyle:  {
        position: 'absolute',
        backgroundColor: 'transparent',
        elevation: 0,
        height: 32,
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0,
        marginTop: 0
      },
      headerTransparent: true,
      tabBarVisible: false
    }
  };
  componentWillMount () {
    const { loadedPrices, loadedOperationsReady } = this.props;
    setTimeout( () => {
      loadedPrices();
    }, 300);
    loadedOperationsReady();
  }

  onChangeCurrencyOnFocus = (parCurrencyOnFocus) => {
    const { changeCurrencyOnFocus } = this.props;
    changeCurrencyOnFocus({ parCurrencyOnFocus });
  }

  onPressWallet = () => {
    this.props.navigation.navigate('Wallet');
  }

  render () {
    const { dataBTC = {}, loading = true, parCurrencyOnFocus = {} } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleApp}>
          Pound
        </Text>
        <View style={styles.body}>
          <View style={styles.containerSymbols}>
            { !loading ? <BarSymbols dataBTC={dataBTC} parCurrencyOnFocus={parCurrencyOnFocus} onChangeCurrencyOnFocus={this.onChangeCurrencyOnFocus} /> : <ActivityIndicator animating color='white' size='small' /> }
          </View>
          { !loading ? <Price parCurrencyOnFocus={parCurrencyOnFocus} /> : <ActivityIndicator animating color='white' size='small' />}
            <View style={styles.containerChart}>
              <ChartCustom />
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={this.onPressWallet} style={styles.buttonWelcome}>
                  <Text style={styles.textButton}>
                      Entrar a mi Wallet
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
    padding: 10
  },
  body: {
    flex: 1
  },
  containerSymbols: {
    flex: 0.5
  },
  containerChart: {
    flex: 4,
    justifyContent: 'center'
  },
  titleApp: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: Color.textHome,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWelcome: {
    backgroundColor: '#fff',
    width: '80%',
    height: 40,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  textButton: {
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
    color: '#000',
    fontSize: 14
  }
})

const mapStateToProps = state => ({
  loading: state.btc.loading,
  dataBTC: state.btc.dataBTC,
  parCurrencyOnFocus: state.btc.parCurrencyOnFocus
});

const mapDispatchToProps = dispatch => ({
  loadedPrices: () => dispatch(loadedPrices()),
  changeCurrencyOnFocus: ({ parCurrencyOnFocus }) => dispatch(changeCurrencyOnFocus({ parCurrencyOnFocus })),
  loadedOperationsReady: () => dispatch(loadedOperationsReady())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartScreen);
