import { useEffect, useState } from 'react';
import { Response } from '../common/types';

export function useInfiniteScroll<T>(updateData: (arr: Array<T>) => void,
  endpoint: string) {
  const [data, setData] = useState<Array<T>>([]);
  let isFetching = false;
  function setFetching(fetching: boolean) {
    isFetching = fetching;
  }
  let offset = 50;
  function setOffset(update: number) {
    offset = update;
  }
  function isInViewport(e: Element) {
    const rect = e.getBoundingClientRect();
    return (
      Math.floor(rect.bottom) - 200 <=
      (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function handleScroll() {
    const footer = document.querySelector('#footer');
    if (!footer || !isInViewport(footer) ||
      isFetching || (offset % 50)) return;
    setFetching(true);
    fetch(`${process.env.REACT_APP_BACKEND_API}/${endpoint}?offset=${offset}`,
      { credentials: 'include' })
      .then((response) => {
        if (!response.ok) {
          setFetching(false);
        }
        return response.json();
      })
      .then((result: Response<T>) => {
        setFetching(false);
        setData(prevState => {
          updateData(result.items);
          return [...prevState, ...result.items];
        });
        setOffset(result.offset);
      }).catch((error) => console.error(error));
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);
}