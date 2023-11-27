import React, { useCallback, useEffect, useState } from 'react';
import SetListPaper from './setListPaper';
import sdk from '@/lib/spotify-sdk/clientInstance';
import { Page, SearchResults } from '@spotify/web-api-ts-sdk';
import { TrackSearchResult } from '@/interfaces/spotify.interface';

function Tracks() {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState<TrackSearchResult>(
    {} as TrackSearchResult
  );

  const getTopMe = useCallback(async () => {
    const res = await sdk.makeRequest<TrackSearchResult>(
      'GET',
      'me/top/tracks'
    );
    console.table(res.items);
    setResults(res);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getTopMe();
  }, [getTopMe]);

  return (
    <div className="w-full flex flex-col justify-center">
      <SetListPaper>
        <h1 className="text-xl font-semibold">Set list</h1>
        <ul>
          {results?.items?.map((track) => {
            return (
              <li key={track.id}>
                {track.name} -{' '}
                {track.artists.map((artist) => artist.name).join(', ')}
              </li>
            );
          })}
        </ul>
      </SetListPaper>

      <div className="mt-4 flex justify-center">
        <button className="px-4 py-2 bg-black rounded-md text-white">
          Download
        </button>
      </div>
    </div>
  );
}

export default Tracks;
