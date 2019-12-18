import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from '../src/pages/MovieDetails';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../src/store/reducers/index';
import {Provider} from 'react-redux';

let store = createStore(reducers, applyMiddleware(thunk));
jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MovieDetails />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
