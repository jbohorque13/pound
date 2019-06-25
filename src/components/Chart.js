import React from 'react';
import { Dimensions } from 'react-native';
import {
  LineChart
} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width

const chartConfig = {
  backgroundGradientFrom: '#2c99f8',
  backgroundGradientTo: '#2c99f8',
  color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2 // optional, default 3
}

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [{
    data: [ 3500, 3400, 4300, 5500, 6000, 10000 ],
    color: (opacity = 1) => `rgba(251, 176, 59, ${opacity})` // optional
  }]
}

export const ChartCustom = () => {
  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={300}
      chartConfig={chartConfig}
    />
  )
}
