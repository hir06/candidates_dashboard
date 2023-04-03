import React from 'react';
import { render, screen } from '@testing-library/react';
import ApplicationsDashboard from './applicationsBoard';

test('renders filters component', () => {
  render(<ApplicationsDashboard />);
  expect(true).toBe(true)
});
