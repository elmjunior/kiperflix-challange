import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';

import Main from './pages/Main';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,

    App: createDrawerNavigator({
      App: createStackNavigator(
        {
          Home: {screen: Home},
          MovieDetails: {screen: MovieDetails},
        },
        {headerMode: 'none'},
      ),
    }),
  }),
);

export default Routes;
