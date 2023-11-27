'use client';

import React, { useState } from 'react';
import Tracks from './tracks';
import { TopMeType } from '@/enums/spotifyTop.enum';
import Artists from './artists';

function MostListenedContainer() {
  const [topMeData, setTopMeData] = useState(TopMeType.TRACK);

  const content = {
    [TopMeType.TRACK]: <Tracks />,
    [TopMeType.ARTIST]: <Artists />,
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-center gap-2">
          <button onClick={() => setTopMeData(TopMeType.TRACK)}>Tracks</button>
          <button onClick={() => setTopMeData(TopMeType.ARTIST)}>
            Artists
          </button>
        </div>
        {content[topMeData]}
      </div>
    </>
  );
}

export default MostListenedContainer;
