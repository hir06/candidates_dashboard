import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from './errorPage';

test('renders learn react link', () => {
  render(<ErrorPage />);
  const linkElement = screen.getByText(/error renders/i);
  expect(linkElement).toBeInTheDocument();
});
