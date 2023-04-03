import React, { FC } from 'react';
import './loader.css';

interface Props {}

const Loader: FC<Props> = () => {
  return (
    <div className="loader">
    <div className="loader__spinner" data-testid="loader-spinner"></div>
  </div>
  );
};

export default Loader;