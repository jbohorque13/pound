import React from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { Symbol } from '../../components/Symbol';

export const BarPrices = () => {
  return (
    <FlatList
      data={[{key: 'USD$'}, {key: 'ARS'}]}
      renderItem={({item}) => {
        return (
          <View style={{ marginHorizontal: 10 }}>
            <Symbol symbol={item.key} />
          </View>
        )
      }}
      initialNumToRender={3}
      removeClippedSubviews
      horizontal
    />
  )
}
