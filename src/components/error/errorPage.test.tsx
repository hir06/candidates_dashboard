import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from './errorPage';

test('renders learn react link', () => {
  render(<ErrorPage />);
  const linkElement = screen.getByText(/Sorry, the page you're looking for doesn't exist/i);
  expect(linkElement).toBeInTheDocument();
});
