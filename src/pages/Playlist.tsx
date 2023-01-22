import React from 'react';
import { useParams } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

export const Playlist = () => {
  useTitle('Spotify Stats | Playlist');

  const { playlistId } = useParams();

  return (
    <>
      Playlist {playlistId}
    </>
  );
};