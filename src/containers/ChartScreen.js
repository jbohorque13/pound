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
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.5 }}>
            { !loading && <BarSymbols dataBTC={dataBTC} parCurrencyOnFocus={parCurrencyOnFocus} onChangeCurrencyOnFocus={this.onChangeCurrencyOnFocus} /> }
          </View>
          { !loading && <Price parCurrencyOnFocus={parCurrencyOnFocus} /> }
            <View style={{ flex: 3, justifyContent: 'flex-end' }}>
              <ChartCustom />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={styles.buttonWelcome}>
                  <Text style={styles.textButton}>
                      Entrar
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
  titleApp: {
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    color: Color.textHome,
    textAlign: 'center',
    margin: 10
  },
  buttonWelcome: {
    backgroundColor: '#fff',
    width: 160,
    height: 40,
    borderRadius: 60,
    alignContent: 'center'
  },
  textButton: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18
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
