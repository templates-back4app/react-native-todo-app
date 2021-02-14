import React from 'react';
import {initializeParse} from '@parse/react-native';

import '~/config/ReactotronConfig';
import NavigationService from './navigationService';

import Routes from '~/routes';

initializeParse(
  'https://parseapi.back4app.com/',
  'APPLICATION_ID',
  'JAVASCRIPT_KEY',
);

const App = () => (
  <Routes
    ref={(navigatorRef) => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
  />
);

export default App;
