import { createStackNavigator } from 'react-navigation';
import WalletScreen from '../containers/WalletScreen';
import OperationDetailScreen from '../containers/OperationDetailScreen';

export const WalletNavigation = createStackNavigator({
  Wallet: { screen: WalletScreen },
});
