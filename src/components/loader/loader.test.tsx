import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './loader';

describe('Loader component', () => {
  it('renders without crashing', () => {
    render(<Loader />);
  });

  it('should render the loader', () => {
    render(<Loader />);
    const loader = screen.getByTestId('loader-spinner');
    expect(loader).toBeInTheDocument();
  });
});
