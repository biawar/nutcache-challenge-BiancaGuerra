import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

interface LoadingProps {
  shouldOpen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ shouldOpen = false }) => {
  return (
    <Backdrop open={shouldOpen}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;