import React, { Component } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInputCustom from './components/TextInputCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const width = Dimensions.get('window').width;

class SendBTCScreen extends Component {
  static navigationOptions = () => {
    return {
      headerStyle:  {
        position: 'absolute',
        backgroundColor: 'transparent',
        elevation: 0,
        height: 32,
        top: 20,
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
  constructor (props) {
    super(props);
    this.state = {
      amountARS: 0,
      amountBTC: 0,
      address: ''
    }
  }

  onChangeText = () => {

  }

  render () {
    const { amountARS = 0, amountBTC = 0, address = '' } = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView style={styles.container}>
          <View style={styles.headerInfoData}>
            <Text style={styles.textInfoTitle}>
                Completa los Datos
            </Text>
            <View style={{ alignSelf: 'flex-start' }}>
              <TextInputCustom
                styleContainer={styles.styleContainer}
                styleTextInput={styles.styleTextInput}
                stylesText={styles.stylesTextHeader}
                textLabel='ARS'
                placeholder='0'
                placeholderTextColor={Colors.textHome}
                value={amountARS}
                key='amountARS'
                onChangeText={this.onChangeText}
              />
              <TextInputCustom
                styleContainer={styles.styleContainer}
                styleTextInput={styles.styleTextInput}
                stylesText={styles.stylesTextHeader}
                placeholder='0'
                placeholderTextColor={Colors.textHome}
                textLabel='BTC a enviar'
                key='amountBTC'
                value={amountBTC}
                onChangeText={this.onChangeText}
              />
              <Text> Fee : 0.00015 </Text>
            </View>
          </View>
          <View style={styles.bodyInfo}>
              <TextInputCustom
                styleContainer={styles.styleContainer}
                styleTextInput={styles.styleTextInput}
                stylesText={styles.stylesTextBody}
                placeholder='o11Cb3a800CsOwWagiI8yl5SGdwLI2P000'
                placeholderTextColor={Colors.black}
                textLabel='Bitcoin Dirección'
                key='address'
                value={address}
                onChangeText={this.onChangeText}
              />
          </View>
          <View style={styles.containerButtonSend}>
            <TouchableOpacity style={styles.buttonSend}>
              <Text style={styles.textSend}>
                Enviar
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
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
  headerInfoData: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.main,
    paddingVertical: 40,
    paddingHorizontal: 10
  },
  bodyInfo: {
    flex: 2,
    fontFamily: 'Lato-Bold',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  textInfoTitle: {
    fontFamily: 'Lato-Italic',
    fontSize: 24,
    color: Colors.textHome,
    textAlign: 'left',
    marginBottom: 15
  },
  styleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    fontFamily: 'Lato',
    marginVertical: 10
  },
  styleTextInput: {
    width: width - 20,
    height: 40,
    borderColor: Colors.grey,
    borderBottomWidth: 1
  },
  stylesTextHeader: {
    fontFamily: 'Lato-Bold',
    color: Colors.textHome,
    fontSize: 16
  },
  stylesTextBody: {
    fontFamily: 'Lato-Bold',
    color: Colors.black,
    fontSize: 16
  },
  containerButtonSend: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.main,
    width: width - 20,
    height: 40
  },
  textSend: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: Colors.textHome
  },
  buttonSend: {
    flex: 1
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
});


export default connect(mapStateToProps, mapDispatchToProps)(SendBTCScreen);
