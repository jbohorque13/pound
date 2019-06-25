import React from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { Symbol } from '../../components/Symbol';

export const BarSymbols = ({ dataBTC = {} }) => {
  console.log('dataBTC.names ', dataBTC);
  return (
    <FlatList
      data={dataBTC}
      keyExtractor={item => item.key}
      renderItem={({item}) => {
        console.log(item.currency);
        return (
          <View style={{ marginHorizontal: 10 }}>
            <Symbol symbol={item.currency} />
          </View>
        )
      }}
      initialNumToRender={3}
      removeClippedSubviews
      horizontal
    />
  )
}
