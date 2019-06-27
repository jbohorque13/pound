import { createStackNavigator } from 'react-navigation';
import WalletScreen from '../containers/WalletScreen';
import OperationDetailScreen from '../containers/OperationDetailScreen';
import SendBTCScreen from '../containers/SendBTCScreen';

export const WalletNavigation = createStackNavigator({
  Wallet: { screen: WalletScreen },
  OperationDetail: { screen: OperationDetailScreen },
  SendBTC: { screen: SendBTCScreen }
});
