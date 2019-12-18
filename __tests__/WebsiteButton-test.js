import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../src/components/WebsiteButton';
import item from '../src/services/tests/fakeMovie.json';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<Component item={item} />).toJSON();
  expect(tree).toMatchSnapshot();
});
