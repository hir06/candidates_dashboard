import React, { FC } from 'react';
import './loader.css';

interface Props {
  size?: number;
}

const Loader: FC<Props> = ({ size = 24 }) => {
  return (
    <div className="loader" style={{ width: size, height: size }}>
      <div className="loader-inner"></div>
      <div className="loader-inner"></div>
    </div>
  );
};

export default Loader;