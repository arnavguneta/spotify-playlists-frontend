import React from 'react';

import styles from './Title.module.css';
import { Props } from '../../../common/types';

export const MainTitle: React.FC<Props> = ({ children }) => {
  return (
    <h1 className={styles.header}>
      {children}
    </h1>
  );
};