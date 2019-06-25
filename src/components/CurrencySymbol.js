import React from 'react';
import {
  Text
} from 'react-native';
import Colors from '../constants/colors';

export const CurrencySymbol = ({ currencySymbol }) => {
  return (
    <Text style={{ color: Colors.textHome }}>
      { currencySymbol }
    </Text>
  )
}
