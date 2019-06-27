import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';

export const OperationRow = ({ operation, onPressDetailOperation = () => null }) => {
  return (
    <TouchableOpacity onPress={() => onPressDetailOperation({ operation })} style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={require('../../../assets/images/mail.png')} />
      </View>
      <View style={styles.containerDescriptionOperation}>
        <Text style={styles.textTitle}>
            Enviates Bitcoin
        </Text>
        <Text style={styles.textDescription} numberOfLines={1}>
            {operation.address}
        </Text>
      </View>
      <View style={styles.containerAmountSend}>
        <Text style={styles.textAmount}>
            {operation.amount} BTC
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Lato',
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center'
  },
  containerImage: {
    flex: 1
  },
  containerDescriptionOperation: {
    flex: 3,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  containerAmountSend: {
    flex: 1
  },
  image: {
    width: 40,
    height: 40
  },
  textAmount: {
    fontSize: 14,
    fontWeight: '300',
    color: '#00c8c8'
  },
  textDescription: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: '#ccc'
  },
  textTitle: {
    fontFamily: 'Lato-Bold',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 16,
    color: '#000'
  }
});
