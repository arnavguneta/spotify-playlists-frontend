import { ReactNode } from 'react';

export const Label = ({ children, htmlFor = '' }:
  {
    children: ReactNode
    htmlFor: string
  }) => {
  return (
    <label htmlFor={htmlFor}>{children}</label>
  );
};