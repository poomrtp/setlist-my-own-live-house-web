import React, { useCallback, useEffect, useState } from 'react';
import ArtistCard from './artistCard';
import sdk from '@/lib/spotify-sdk/clientInstance';
import {
  ArtistSearchResult,
  TrackSearchResult,
} from '@/interfaces/spotify.interface';

function Artists() {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState<ArtistSearchResult>(
    {} as ArtistSearchResult
  );

  const getTopMe = useCallback(async () => {
    const res = await sdk.makeRequest<ArtistSearchResult>(
      'GET',
      'me/top/artists'
    );
    setResults(res);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getTopMe();
  }, [getTopMe]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results?.items?.map((artist, index) => (
        <ArtistCard
          key={index}
          name={artist.name}
          image={artist?.images[0]?.url}
        />
      ))}
    </div>
  );
}

export default Artists;
