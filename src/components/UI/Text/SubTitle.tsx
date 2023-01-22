import React from 'react';

import styles from './Title.module.css';

export const SubTitle = ({ children, center }: 
  {children: React.ReactNode, center?: boolean}) => {
  return (
    <h2 className={`${styles.sub} ${center ? styles.center : ''}`}>
      {children}
    </h2>
  );
};