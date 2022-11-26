import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

test('test', () => {
  expect(true).toBe(true);
});

// test('matches snapshot', () => {
//   const tree = renderer.create(<App/>).toJSON();
//   expect(tree).toMatchSnapshot();
// })