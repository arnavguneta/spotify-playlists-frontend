import React from 'react';

import styles from './Form.module.css';
import { Props } from '../../../common/types';

export const Button: React.FC<Props> = ({children}) => {
  return (
    <button className={`${styles.round} ${styles.btn}`}
      type="submit">{children}</button>
  );
};