import Icon from '@mdi/react';

import { mdiMusic, mdiPause, mdiPlay } from '@mdi/js';



function PlaylistItem({ track, state, onClick }: PlaylistItemProps) {

  return (

    <li className="flex flex-row px-3 py-2 space-x-4 mb-2">

      <div className="w-12 h-12 text-neutral-400 p-2 border border-neutral-400" aria-hidden="true">

        <Icon path={mdiMusic} />

      </div>

      <div className="flex-1">

        <div className="flex flex-row">

          <h2 className="flex-1 font-bold">{track.title}</h2>

          <p className="text-neutral-200">{track.length}</p>

        </div>

        <p>{track.artist} - {track.album}</p>

      </div>

      <button onClick={onClick} className="w-12 h-12 p-2" aria-label={state === 'playing' ? 'Pause playing this track' : 'Start playing this track'}>

        <Icon path={state === 'playing' ? mdiPause : mdiPlay} />

      </button>

    </li>

  )

}



export default PlaylistItem