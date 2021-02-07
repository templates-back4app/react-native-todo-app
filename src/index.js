import React from 'react';

import '~/config/ReactotronConfig';
import NavigationService from './navigationService';

import Routes from '~/routes';

const App = () => (
  <Routes
    ref={(navigatorRef) => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
  />
);

export default App;
