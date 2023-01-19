import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useRedirect(condition: boolean, path = '/', replace = true) {
  const navigate = useNavigate();
  useEffect(() => {
    if (condition) navigate(path, { replace });
  }, []);
}


