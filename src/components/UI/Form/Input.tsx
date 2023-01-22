import React from 'react';

import styles from './Form.module.css';

export const Input = ({ placeholder, value, onChange }:
  {
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }) => {
  return (
    <input className={`${styles.round} ${styles.input}`}
      type='text' value={value} autoComplete='off'
      placeholder={placeholder} required
      onChange={onChange}
    />
  );
};