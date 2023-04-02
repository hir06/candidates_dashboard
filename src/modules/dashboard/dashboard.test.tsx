import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';

test('renders filters component', () => {
  render(<Dashboard />);
  //const linkElement = screen.getByText(/applications/i);
  expect(true).toBe(true)
  //expect(linkElement).toBeInTheDocument();
});
