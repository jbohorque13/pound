import React, { Component } from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import { connect } from 'react-redux';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

class OperationDetailScreen extends Component {
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
        bottom: 20,
        borderBottomWidth: 0,
        marginTop: 0
      },
      headerTransparent: true,
      tabBarVisible: false
    }
  };

  render () {
    const { navigation } = this.props;
    const operation = navigation.getParam('operation', {});
    return (
      <View style={styles.container}>
        <View style={styles.headerInfoOperation}>
          <Text style={styles.textAmountTransation}>
              BTC { operation.amount }
          </Text>
          {operation.status === 1 ? <Text style={[styles.textStatusTransation, { color: Colors.second }]}>
              Confirmado
          </Text> : <Text style={[styles.textStatusTransation, { color: Colors.error }]}>
              No Confirmado
          </Text> }
        </View>
        <View style={styles.bodyInfoInfoOperation}>
          <View style={styles.containerInfo}>
            <View style={styles.containerIconText}>
              <Icon name="clock-o" size={22} color={Colors.grey} />
              <Text style={styles.titleTextInfo}>
                Fecha de envío
              </Text>
            </View>
            <Text style={styles.dataText}>
              { operation.date }
            </Text>
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.containerIconText}>
              <Icon name="bitcoin" size={22} color={Colors.grey} />
              <Text style={styles.titleTextInfo}>
                Comisión cobrada
              </Text>
            </View>
            <Text style={styles.dataText}>
              { operation.fee }
            </Text>
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.containerIconText}>
              <Icon name="address-book-o" size={22} color={Colors.grey} />
              <Text style={styles.titleTextInfo}>
                Dirección destino
              </Text>
            </View>
            <Text style={styles.dataText}>
              { operation.address }
            </Text>
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.containerIconText}>
              <Text style={styles.titleTextInfo}>
                Hash de confirmación
              </Text>
            </View>
            <Text style={styles.dataText}>
              { operation.hash }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Lato',
    backgroundColor: Colors.textHome
  },
  headerInfoOperation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.main,
    paddingVertical: 20
  },
  bodyInfoInfoOperation: {
    flex: 3,
    fontFamily: 'Lato-Bold',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  textAmountTransation: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: Colors.textHome,
    textAlign: 'center',
    marginBottom: 10
  },
  textStatusTransation: {
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10
  },
  titleTextInfo: {
    fontSize: 15,
    color: Colors.grey,
    marginLeft: 10
  },
  dataText: {
    fontFamily: 'Lato',
    fontSize: 12,
    color: Colors.black
  },
  containerIconText: {
    flexDirection: 'row',
    marginBottom: 10
  },
  containerInfo: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5'
  }
});

const mapStateToProps = state => ({
  loading: state.btc.loading,
  dataBTC: state.btc.dataBTC,
  priceBTCARS: state.btc.priceBTCARS,
  dataWallet: state.wallet.dataWallet,
  operations: state.operations.operations
});

const mapDispatchToProps = dispatch => ({
  loadedDataWallet: () => dispatch(loadedDataWallet()),
  loadedPrices: () => dispatch(loadedPrices())
});


export default connect(mapStateToProps, mapDispatchToProps)(OperationDetailScreen);
