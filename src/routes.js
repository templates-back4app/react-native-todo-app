import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import Learning from '~/pages/Learning';
import Shopping from '~/pages/Shopping';
import Work from '~/pages/Work';
import AddTodo from '~/pages/AddTodo';

const MainStack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({navigation}) => ({
        title: 'Tasks Menu',
      }),
    },
    Learning,
    Shopping,
    Work,
    AddTodo,
  },
  {
    initialRouteName: 'Main',
  },
);

const Routes = createAppContainer(createSwitchNavigator({MainStack}));

export default Routes;
