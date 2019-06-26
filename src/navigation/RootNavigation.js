import { createStackNavigator, createAppContainer } from 'react-navigation';
import ChartScreen from '../containers/ChartScreen';
import { WalletNavigation } from './WalletNavigation';

const RootNavigation = createStackNavigator({
  Chart: { screen: ChartScreen },
  Wallet: { screen: WalletNavigation }
});

export default createAppContainer(RootNavigation);
