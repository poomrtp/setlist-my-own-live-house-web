import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  createRef,
  Ref,
} from 'react';
import { toPng } from 'html-to-image';
import SetListPaper from './setListPaper';
import sdk from '@/lib/spotify-sdk/clientInstance';
import { Page, SearchResults } from '@spotify/web-api-ts-sdk';
import { TrackSearchResult } from '@/interfaces/spotify.interface';
import { useSession } from 'next-auth/react';

function Tracks() {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState<TrackSearchResult>(
    {} as TrackSearchResult
  );

  const paperRef = useRef<HTMLDivElement>(null);
  const getTopMe = useCallback(async () => {
    try {
      const res = await sdk.makeRequest<TrackSearchResult>(
        'GET',
        'me/top/tracks'
      );
      setResults(res);
    } catch (error: any) {
      // console.log('err', error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getTopMe();
  }, [getTopMe]);

  async function onDownload() {
    if (!paperRef?.current) return;
    const dataUrl = await toPng(paperRef.current);

    const link = document.createElement('a');
    link.download = `spotifine-setlist-${new Date().getTime()}.png`;
    link.href = dataUrl;
    link.click();
  }

  return (
    <div className="w-full flex flex-col justify-center">
      <SetListPaper ref={paperRef} isLoading={isLoading}>
        <h1 className="text-xl text-black font-semibold">
          {session.data?.user?.name} - Set list
        </h1>
        <ul className="text-black">
          {results?.items?.map((track) => {
            return (
              <li key={track.id} className="text-black">
                {track.name} -{' '}
                {track.artists.map((artist) => artist.name).join(', ')}
              </li>
            );
          })}
        </ul>
      </SetListPaper>

      <div className="mt-4 flex justify-center">
        <button className="btn btn-primary" onClick={onDownload}>
          Download
        </button>
      </div>
    </div>
  );
}

export default Tracks;
