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
  images: Array<{
    url: string,
    height: number | undefined,
    width: number | undefined,
  }>,
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

export interface MenuItems {
  items: Array<string>
}

export interface DropdownSettings extends MenuItems {
  show: boolean,
  toggle: () => void,
  style?: object
}

export interface PlaylistItems {
  collaborative: boolean,
  description: string | null,
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  images: Array<{
    height: number,
    url: string,
    width: number
  }> | [],
  name: string,
  owner: {
    display_name: string
  },
  public: boolean,
  snapshot_id: string,
  tracks: {
    href: string,
    total: number
  } | null,
  type: string,
  uri: string
}

export type Callback = () => void;