import React from 'react';

import styles from './Form.module.css';

export const Input = ({ placeholder = '', value, onChange, id = '',
  dark = false, hasIcon = false }:
  {
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    id?: string,
    dark?: boolean,
    hasIcon?: boolean,
  }) => {
  return (
    <>
      <input onChange={onChange} id={id} required type='text'
        className={`${styles.round} ${styles.input} ${dark ? styles.dark : ''}
        ${hasIcon ? styles.hasIcon : ''}`}
        value={value} autoComplete='off' placeholder={placeholder} />
    </>
  );
};