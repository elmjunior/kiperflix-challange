import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../src/components/Genres';
import item from '../src/services/tests/fakeMovie.json';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<Component item={item.genres} />).toJSON();
  expect(tree).toMatchSnapshot();
});
