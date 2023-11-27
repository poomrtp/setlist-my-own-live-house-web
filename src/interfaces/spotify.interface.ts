import { ArtistSearchResultItem, Track, Artist } from '@spotify/web-api-ts-sdk';

export interface ArtistSearchResult {
  href: string;
  items: Artist[];
}

export interface TrackSearchResult {
  href: string;
  items: Track[];
}
