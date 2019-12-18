import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/pages/Home';
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
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
