import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Price = ({ props }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>
            { props.priceBuy }
        </Text>
      </View>
      <View>
        <Text>
            { props.priceSell }
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  containerLeft: {
    flex: 1
  },
  containerRight: {
    flex: 1
  }
});
