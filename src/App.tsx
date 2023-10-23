import { useState } from 'react';

import PlaylistItem from './PlaylistItem';
import Icon from '@mdi/react';
import { mdiMusicCircle } from '@mdi/js';


function App() {

  const [ items ] = useState([

    {

      id: 1,

      title: 'Help me lord!',

      artist: 'Arty Mcgyver',

      album: 'Album 2',

      length: '4:23',

    },

    {

      id: 2,

      title: 'I Hear A Sound',

      artist: 'Katherine McInnes',

      album: 'Highway to Roads',

      length: '3:23',

    },

    {

      id: 3,

      title: 'Let Me Pet That Dawg',

      artist: 'McLovin',

      album: 'The Gen Z Are Out Of CTRL',

      length: '3:33',

    },

  ] as Track[]);

  const [ currentTrack, updateCurrentTrack ] = useState(3);

  return (

    <div className="min-h-screen bg-slate-800 text-white">

      <main className="max-w-screen-md mx-auto">

        <header className="bg-pink-600 text-2xl font-bold p-3">

          <h1><Icon className="inline-block" path={mdiMusicCircle} width="40" height="40" /> Spawtify - Playlist</h1>

        </header>

        <ol className="border-4 border-pink-600">

          {items.map((track) => { return <PlaylistItem

            key={track.id}

            track={track}

            state={track.id === currentTrack ? 'playing' : 'paused'}

            onClick={() => { track.id === currentTrack ? updateCurrentTrack(-1) : updateCurrentTrack(track.id) }}

          />})}

        </ol>

      </main>

    </div>

  )

}



export default App