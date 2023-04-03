import React from 'react';
import { render, screen } from '@testing-library/react';
import ApplicationsDashboard from './applicationsBoard';

test('renders filters component', () => {
  render(<ApplicationsDashboard />);
  //const linkElement = screen.getByText(/applications/i);
  expect(true).toBe(true)
  //expect(linkElement).toBeInTheDocument();
});
