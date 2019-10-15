import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Truyen from './Truyen';
import DangNhap from './DangNhap';
const AppNavigatorTab = createBottomTabNavigator(
  {
    Truyen: {
      screen: Truyen,
      navigationOptions: {
        title: 'Truyện'
      }
    },
    DangNhap: {
      screen: DangNhap,
      navigationOptions: {
        title: 'Đăng nhập',

      }
    },

  }

);
export default createAppContainer(AppNavigatorTab);