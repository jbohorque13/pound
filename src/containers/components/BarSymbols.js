import React from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { Symbol } from '../../components/Symbol';

export const BarSymbols = ({ dataBTC = {} }) => {
  return (
    <FlatList
      data={Object.keys(dataBTC.names)}
      keyExtractor={item => item.key}
      renderItem={({item}) => {
        return (
          <View style={{ marginHorizontal: 10 }}>
            <Symbol symbol={item} />
          </View>
        )
      }}
      initialNumToRender={3}
      removeClippedSubviews
      horizontal
    />
  )
}
