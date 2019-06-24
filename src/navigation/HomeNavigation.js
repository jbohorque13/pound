import { createStackNavigator, createAppContainer } from 'react-navigation';
import ChartScreen from '../containers/ChartScreen';

const HomeNavigation = createStackNavigator({
  Chart: { screen: ChartScreen }
});

export default createAppContainer(HomeNavigation);
