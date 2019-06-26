import React, { Component } from 'react';
import {
  View, StyleSheet, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { loadedPrices } from '../actions/btc';
import { loadedDataWallet } from '../actions/wallet';

import Color from '../constants/colors';
import { HeaderWalletInfo } from './components/HeaderWalletInfo';

class WalletScreen extends Component {
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

  componentDidMount () {
    this.props.loadedDataWallet();
    this.props.loadedPrices();
  }

  onListScroll = event => {

  }

  render () {
    const { dataWallet = {}, priceBTCARS = null } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<HeaderWalletInfo dataWallet={dataWallet} priceBTCARS={priceBTCARS} />}
          onScroll={this.onListScroll}
          data={[]}
          renderItem={row => console.log(row)}
          scrollEventThrottle={2}
        />
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
  priceBTCARS: state.btc.priceBTCARS,
  dataWallet: state.wallet.dataWallet
});

const mapDispatchToProps = dispatch => ({
  loadedDataWallet: () => dispatch(loadedDataWallet()),
  loadedPrices: () => dispatch(loadedPrices())
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletScreen);
