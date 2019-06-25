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
    data: [ 20, 45, 28, 80, 99, 80 ],
    color: (opacity = 1) => `rgba(251, 176, 59, ${opacity})` // optional
  }]
}

export const ChartCustom = () => {
  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
    />
  )
}
