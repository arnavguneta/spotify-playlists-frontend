import { MainTitle } from '../components/UI/Text/MainTitle';
import { useRedirect } from '../hooks/useRedirect';
import { useTitle } from '../hooks/useTitle';

export const Lost404 = () => {
  useTitle('Spotify Stats | 404');
  useRedirect();
  
  return (
    <>
      <MainTitle>404</MainTitle>
    </>
  );
};
