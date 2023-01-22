import React from 'react';

import styles from './Title.module.css';
import { Props } from '../../../common/types';

export const SubTitle: React.FC<Props> = ({ children }) => {
  return (
    <h2 className={styles.sub}>
      {children}
    </h2>
  );
};