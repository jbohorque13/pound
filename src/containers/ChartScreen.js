import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { loadedPrices, changeCurrencyOnFocus } from '../actions/btc';
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
    setTimeout( () => {
      this.props.loadedPrices();
    }, 300);
  }

  onChangeCurrencyOnFocus = (parCurrencyOnFocus) => {
    const { changeCurrencyOnFocus } = this.props;
    changeCurrencyOnFocus({ parCurrencyOnFocus });
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
            { !loading && <BarSymbols dataBTC={dataBTC} parCurrencyOnFocus={parCurrencyOnFocus} onChangeCurrencyOnFocus={this.onChangeCurrencyOnFocus} /> }
          </View>
          { !loading && <Price parCurrencyOnFocus={parCurrencyOnFocus} /> }
            <View style={styles.containerChart}>
              <ChartCustom />
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.buttonWelcome}>
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
    width: 160,
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
  changeCurrencyOnFocus: ({ parCurrencyOnFocus }) => dispatch(changeCurrencyOnFocus({ parCurrencyOnFocus }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartScreen);
