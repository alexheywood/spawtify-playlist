/// <reference types="vite/client" />



type Track = {

    id: number,
  
    title: string,
  
    artist: string,
  
    album: string,
  
    length: string,
  
  };
  
  
  
  type PlaylistItemProps = {
  
    track: Track,
    state: 'playing' | 'paused',
    onClick: () => void,
  
  }