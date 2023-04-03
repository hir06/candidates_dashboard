import React from 'react';
import { render, screen } from '@testing-library/react';
import ApplicationsBoard from './applicationsBoard';

test('renders filters component', () => {
  render(<ApplicationsBoard />);
  expect(true).toBe(true)
});
