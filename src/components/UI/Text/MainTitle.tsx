import React from 'react';

import styles from './Title.module.css';

export const MainTitle = ({ children, center }: 
  {children: React.ReactNode, center?: boolean}) => {
  return (
    <h1 className={`${styles.header} ${center ? styles.center : ''}`}>
      {children}
    </h1>
  );
};