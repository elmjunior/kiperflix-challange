import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../src/components/ProductionCompanies';
import item from '../src/services/tests/fakeMovie.json';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer
    .create(<Component items={item.production_companies} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
