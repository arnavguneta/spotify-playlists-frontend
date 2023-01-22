import React from 'react';

import styles from './Misc.module.css';

export const Separator = ({ width }: { width?: string }) => {
  return (
    <div className={styles.separator} style={{ width }} />
  );
};