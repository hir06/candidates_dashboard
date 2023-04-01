import React from 'react';
import { render } from '@testing-library/react';
import Loader from './loader';

describe('Loader', () => {
  it('should render a loader with the correct size', () => {
    const size = 32;
    const { container } = render(<Loader size={size} />);
    // eslint-disable-next-line testing-library/no-node-access
    const loader = container.firstChild as HTMLElement;
    expect(loader).toHaveStyle(`width: ${size}px;`);
    expect(loader).toHaveStyle(`height: ${size}px;`);
  });
});