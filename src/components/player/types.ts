
export interface TrackArtistSummary {
    name: string
    slug: string
}

export interface Track {
    src: string,
    title: string,
    artists: TrackArtistSummary[],
    albumName: string,
  }

export type TrackList = Track[];
