import { useEffect } from 'react';
import { Callback } from '../utils/types';

export function useTimeout(timeout: number, callback: Callback) {
  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      callback();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, []);
}