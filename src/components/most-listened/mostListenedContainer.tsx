'use client';

import React, { useState } from 'react';
import Tracks from './tracks';
import { TopMeType } from '@/enums/spotifyTop.enum';
import Artists from './artists';
import { useSession } from 'next-auth/react';

function MostListenedContainer() {
  const session = useSession();
  const [topMeData, setTopMeData] = useState(TopMeType.TRACK);

  const content = {
    [TopMeType.TRACK]: <Tracks />,
    // [TopMeType.ARTIST]: <Artists />,
  };

  return (
    <>
      <div className="w-full">
        <p>Logged in as {session?.data?.user?.name}</p>
        <div className="w-full flex justify-center gap-2 my-2">
          {/* <button className="btn" onClick={() => setTopMeData(TopMeType.TRACK)}>
            Tracks
          </button> */}
          {/* <button
            className="btn"
            onClick={() => setTopMeData(TopMeType.ARTIST)}
          >
            Artists
          </button> */}
        </div>
        {content[topMeData]}
      </div>
    </>
  );
}

export default MostListenedContainer;
