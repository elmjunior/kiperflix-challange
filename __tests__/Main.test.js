import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../src/pages/Main';
jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
});
