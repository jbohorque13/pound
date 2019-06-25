import React from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { Symbol } from '../../components/Symbol';

export const BarSymbols = ({ dataBTC = {}, parCurrencyOnFocus = {}, onChangeCurrencyOnFocus }) => {
  return (
    <FlatList
      style={{ borderColor: 'red', borderWidth: 3, height: 20 }}
      data={dataBTC}
      keyExtractor={item => item.key}
      renderItem={({item}) => {
        return (
          <View style={{ marginHorizontal: 10 }}>
            <Symbol parCurrencyBTC={item} parCurrencyOnFocus={parCurrencyOnFocus} onChangeCurrencyOnFocus={onChangeCurrencyOnFocus} />
          </View>
        )
      }}
      showsVerticalScrollIndicator={false}
      initialNumToRender={3}
      removeClippedSubviews
      horizontal
    />
  )
}
