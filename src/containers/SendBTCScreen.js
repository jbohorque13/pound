import React, { Component } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputCustom from './components/TextInputCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getRandom, getHashRandom, getAddressRandom } from '../utils';
import { saveOperation } from '../actions/operations';

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
      address: '',
      fee: getRandom(0.0001, 0.0002).toFixed(5),
      showAlert: false
    }
  }

  onChangeAddress = ({ text }) => {
    const { state } = this;
    this.setState({
      ...state,
      address: text
    })
  }

  onChangeAmountBTC = ({ text }) => {
    const { state } = this;
    let { amountARS = 0, fee = 0 } = state;
    const { priceBTCARS } = this.props;
    amountARS = text * (priceBTCARS - fee);

    this.setState({
      ...state,
      amountBTC: text,
      amountARS: amountARS.toFixed(5)
    })
  }

  onChangeTextAmountARS = ({ text }) => {
    const { state } = this;
    let { amountBTC = 0, fee = 0 } = state;
    const { priceBTCARS } = this.props;
    amountBTC = (text / priceBTCARS) - fee;

    this.setState({
      ...state,
      amountARS: text,
      amountBTC: amountBTC.toFixed(5)
    })
  }
  onSaveOperation = () => {
    const { amountBTC = 0, amountARS = 0, fee = 0, address } = this.state;
    const { navigation, saveOperation = () => null } = this.props;
    if (amountBTC !== 0 && amountARS !== 0 && address !== ''){
      const operation = {
        id: getRandom(5, 20).toFixed(0),
        date: moment().format('DD-MM-YYYY'),
        amount: amountBTC,
        fee,
        address: getAddressRandom(),
        hash: getHashRandom(),
        status: 1
      }
      saveOperation({ operation });
      this.changeAlert();
      navigation.navigate('Wallet');
    }
  }

  changeAlert = () => {
    const {showAlert} = this.state;
    this.setState({
      showAlert: !showAlert
    });
  };

  render () {
    const { amountARS = 0, amountBTC = 0, address = '', fee = '', showAlert } = this.state;
    const { priceBTCARS = '' } = this.props;
    const { dataWallet = {} } = this.props;

    return (
      <ScrollView style={styles.container}>
        <KeyboardAwareScrollView style={styles.container}>
          <View style={styles.headerInfoData}>

            <Text style={styles.textInfoTitle}>
                Completa los Datos
            </Text>
            <View>
              <TextInputCustom
                styleContainer={styles.styleContainer}
                styleTextInput={styles.styleTextInput}
                stylesText={styles.stylesTextHeader}
                textLabel='ARS'
                placeholder='0'
                keyboardType='numeric'
                placeholderTextColor={Colors.grey}
                value={amountARS}
                key='amountARS'
                onChangeText={this.onChangeTextAmountARS}
              />
              <TextInputCustom
                styleContainer={styles.styleContainer}
                styleTextInput={styles.styleTextInput}
                stylesText={styles.stylesTextHeader}
                placeholder='0'
                keyboardType='numeric'
                placeholderTextColor={Colors.grey}
                textLabel='BTC a enviar'
                key='amountBTC'
                value={amountBTC}
                onChangeText={this.onChangeAmountBTC}
              />
              <Text style={styles.textFee}> Fee : { fee } esta comisión se restara automáticamente </Text>
            </View>
          </View>
          <View style={styles.bodyInfo}>
              <TextInputCustom
                styleContainer={styles.styleContainer}
                styleTextInput={styles.styleTextInput}
                stylesText={styles.stylesTextBody}
                placeholder='o11Cb3a800CsOwWagiI8yl5SGdwLI2P000'
                placeholderTextColor={Colors.grey}
                textLabel='Bitcoin Dirección'
                key='address'
                value={address}
                onChangeText={this.onChangeAddress}
              />
              <Text style={styles.textConvertion}> 1 BTC = { priceBTCARS } </Text>
              <View style={styles.amountMyWallet}>
                <Icon name='wallet' style={styles.icon} size={30} />
                <Text style={styles.textAmountBTC}>
                    Mi saldo 0.125632 BTC
                </Text>
              </View>
              <View style={styles.containerButtonSend}>
                <TouchableOpacity onPress={() => this.changeAlert()} disabled={(amountBTC !== 0 && amountARS !== 0 && address !== '') ? false : true} style={[styles.buttonSend, (amountBTC !== 0 && amountARS !== 0 && address !== '') ? {opacity: 1 }: {opacity: 0.5}]}>
                  <Text style={styles.textSend}>
                    Enviar
                  </Text>
                </TouchableOpacity>
              </View>
          </View>

        </KeyboardAwareScrollView>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Envío"
          message="Estas seguro de hacer está transación ?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancelar"
          confirmText="Aceptar"
          confirmButtonColor="#0189ff"
          onCancelPressed={() => {
            this.onSaveOperation();
          }}
          onConfirmPressed={() => {
            this.onSaveOperation();
          }}
        />
      </ScrollView>
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
    borderColor: Colors.black,
    borderBottomWidth: 0.2
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
    justifyContent: 'center',
    marginTop: 20
  },
  textSend: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    textAlign: 'center',
    color: Colors.textHome
  },
  textFee: {
    marginBottom: 10,
    fontSize: 12,
    color: Colors.textHome
  },
  textConvertion: {
    fontFamily: 'Lato-Italic',
    fontSize: 18,
    color: Colors.black,
    marginVertical: 20
  },
  buttonSend: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.main,
    width: width - 20,
    height: 40,
  },
  textAmountBTC: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: Colors.second,
    marginLeft: 10
  },
  icon: {
    color: Colors.second,
    width: 30,
    height: 30,
    alignItems: 'center'
  },
  amountMyWallet: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  }
});

const mapStateToProps = state => ({
  priceBTCARS: state.btc.priceBTCARS,
  dataWallet: state.wallet.dataWallet,
  operations: state.operations.operations
});

const mapDispatchToProps = dispatch => ({
  saveOperation: ({ operation }) => dispatch(saveOperation({ operation }))
});


export default connect(mapStateToProps, mapDispatchToProps)(SendBTCScreen);
