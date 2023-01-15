import React, { Dispatch, SetStateAction } from 'react';

export interface UserContext {
  country: string,
  display_name: string,
  email: string,
  explicit_content: object,
  external_urls: object,
  followers: object,
  href: string,
  id: string,
  images: object[],
  product: string,
  type: string,
  uri: string
}

export interface Props {
  children: React.ReactNode;
}

export interface UserContextValue {
  user: UserContext,
  setUser: Dispatch<SetStateAction<UserContext>>,
  isAuth: boolean,
  setAuth: Dispatch<SetStateAction<boolean>>
}

export type Callback = () => void;