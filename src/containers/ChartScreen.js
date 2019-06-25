import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { loadedPrices, changeCurrencyOnFocus } from '../actions/btc';
import Color from '../constants/colors';
import { BarSymbols } from './components/BarSymbols';
import { Price } from '../components/Price';

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
          { !loading && <BarSymbols dataBTC={dataBTC} parCurrencyOnFocus={parCurrencyOnFocus} onChangeCurrencyOnFocus={this.onChangeCurrencyOnFocus} /> }
          { !loading && <Price parCurrencyOnFocus={parCurrencyOnFocus} /> }
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
    fontSize: 22,
    color: Color.textHome,
    textAlign: 'center',
    margin: 10
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
