import { createDrawerNavigator } from 'react-navigation';
import ChartScreen from '../containers/ChartScreen';

export const HomeNavigation = createDrawerNavigator({
  Chart: { screen: ChartScreen }
});
