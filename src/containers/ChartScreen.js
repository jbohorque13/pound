import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import Color from '../constants/colors';
import { BarPrices } from './components/BarPrices';

export default class ChartScreen extends Component {
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
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.titleApp}>
          Pound
        </Text>
        <BarPrices />
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
