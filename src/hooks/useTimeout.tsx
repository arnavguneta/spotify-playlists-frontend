import { useEffect } from 'react';

type Callback = () => void;

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