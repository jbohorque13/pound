import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { loadedPrices } from '../actions/btc';
import Color from '../constants/colors';
import { BarSymbols } from './components/BarSymbols';

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
    this.props.loadedPrices();
  }

  render () {
    const { dataBTC = {}, loading = true } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleApp}>
          Pound
        </Text>
        { !loading && <BarSymbols dataBTC={dataBTC} /> }
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
  dataBTC: state.btc.dataBTC
});

const mapDispatchToProps = dispatch => ({
  loadedPrices: () => dispatch(loadedPrices())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartScreen)
