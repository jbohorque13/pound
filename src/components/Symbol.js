import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/colors';

export const Symbol = (props) => (
  <TouchableOpacity>
    { props.symbol === 'ARS' ?
      <Text style={{ color: Colors.second }}>
        BTC / { props.symbol }
      </Text> : <Text style={{ color: Colors.textHome }}>
        BTC / { props.symbol }
      </Text>
    }
  </TouchableOpacity>
)
