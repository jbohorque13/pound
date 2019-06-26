import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { WalletNavigation } from './WalletNavigation';
import { HomeNavigation } from './HomeNavigation';

const RootNavigation = createDrawerNavigator({
  Home: { screen: HomeNavigation },
  Wallet: { screen: WalletNavigation }
});

export default createAppContainer(RootNavigation);
