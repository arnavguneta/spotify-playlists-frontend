import React from 'react';
import { useParams } from 'react-router-dom';

export const Playlist = () => {
  const { playlistId } = useParams();
  return (
    <>
      Playlist {playlistId}
    </>
  );
};