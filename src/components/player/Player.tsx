import React from "react";
import AudioPlayer from "react-h5-audio-player";
import { ClientOnly, Link } from "@tanstack/react-router";

import "react-h5-audio-player/lib/styles.css";
import { TrackList, TrackArtistSummary } from "./types";
import Box from "@mui/material/Box";

const div: TrackArtistSummary = {
  name: "Dissonance in the Void",
  slug: "dissonance-in-the-void",
};
const playlist: TrackList = [
  // {
  //   src: 'https://storage.googleapis.com/archives.blainegarrett.com/div/music/Dissonance%20In%20the%20Void-AV%20Massacre.mp3',
  //   title: 'AV Massacre',
  //   artists: [div],
  //   albumName: 'DIV'
  // },
  // {
  //   src: 'https://storage.googleapis.com/archives.blainegarrett.com/div/music/Dissonance%20In%20the%20Void-Ballad%20of%20the%20Damned.mp3',
  //   title: 'Ballad of the Damned',
  //   artists: [div],
  //   albumName: 'DIV'
  // },
  {
    src: "https://storage.googleapis.com/archives.blainegarrett.com/div/music/Dissonance%20In%20the%20Void-Consumer%20Hierarchy.mp3",
    title: "Consumer Hierarchy",
    artists: [div],
    albumName: "DIV",
  },
  //     {
  //       src: 'https://storage.googleapis.com/archives.blainegarrett.com/div/music/Dissonance%20In%20the%20Void-Cornered.mp3',
  //       title: 'Cornered',
  //       artists: [div],
  //       albumName: 'DIV'
  //     }
  //   ,
  {
    src: "https://storage.googleapis.com/archives.blainegarrett.com/div/music/Dissonance%20In%20the%20Void-Fish%20Tank%20Warefare.mp3",
    title: "Fishtank Warfare",
    artists: [div],
    albumName: "DIV",
  },
  //     {
  //     src: 'https://storage.googleapis.com/archives.blainegarrett.com/div/music/Dissonance%20In%20the%20Void-Physical.mp3',
  //     title: 'Physical',
  //     artists: [div],
  //     albumName: 'DIV'
  //   },
  {
    src: "https://storage.googleapis.com/archives.blainegarrett.com/div/music/Dissonance%20In%20the%20Void-Riot.mp3",
    title: "Riot",
    artists: [div],
    albumName: "DIV",
  },
  //   ,
  //   {
  //     src: 'https://storage.googleapis.com/archives.blainegarrett.com/div/music/Dissonance%20In%20the%20Void-Road%20Hed.mp3',
  //     title: 'Road Hed',
  //     artists: [div],
  //     albumName: 'DIV'
  //   }
];

export default function PlayerUI() {
  let [activeTrack, setActiveTrack] = React.useState(0);

  const handleClickPrevious = () => {
    let prevTrack = activeTrack === 0 ? playlist.length - 1 : activeTrack - 1;
    setActiveTrack(prevTrack);
  };

  const handleClickNext = () => {
    let prevTrack = activeTrack < playlist.length - 1 ? activeTrack + 1 : 0;
    setActiveTrack(prevTrack);
  };
  const onEnded = () => {
    handleClickNext();
  };

  let artists: TrackArtistSummary[] = playlist[activeTrack].artists;

  return (
    <ClientOnly>
      <Box
        className="container"
        sx={(theme) => ({
          "&.container": {
            position: "fixed",
            bottom: 0,
            right: 0,
            height: 100,
            width: "100%",
            backgroundColor: "#222222",
            color: "#ffffff",
            [theme.breakpoints.down("sm")]: {
              height: 160,
            },
          },

          "& .wrapper": {
            flexDirection: "row",
            display: "flex",
            marginLeft: 2.5,
            marginRight: 2.5,
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          },

          "& .trackInfo": {
            paddingTop: 2.5,
            display: "flex",
            flex: 1,
            flexGrow: 0,
            minWidth: 300,
            flexDirection: "column",
            alignSelf: "center",
            [theme.breakpoints.down("sm")]: {
              alignItems: "center",
            },
          },
          "& .trackTitle": {
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "0.875rem",
          },
          "& .bandName": {
            color: "#afafaf",
            fontSize: "0.75rem",
            fontWeight: 400,
            "& a": {
              color: "#afafaf",
              textDecoration: "none",
            },
          },
          "& .albumName": {
            color: "#999999",
            fontSize: "0.875rem",
          },

          "& .playerUI": {
            display: "flex",
            flex: 1,
          },

          "& .subInfoWrapper": {
            paddingTop: 2.5,
            display: "flex",
            flex: 1,
            flexGrow: 0,
            minWidth: 300,
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "flex-end",
          },

          "& .rhap_container": {
            backgroundColor: "transparent !important",
            boxShadow: "none !important",
            color: "#ffffff !important",
          },
          "& .rhap_progress-filled": {
            backgroundColor: `${theme.palette.primary.main} !important`,
          },
          "& .rhap_download-progress": {
            backgroundColor: `#3f3f3f !important`,
          },
          "& .rhap_progress-indicator": {
            display: "none",
            backgroundColor: "#afafaf !important",
            width: 15,
            height: 15,
            top: -5,
          },
          "& .rhap_time": {
            color: "#afafaf !important",
            fontSize: "1rem",
          },
          "& .rhap_progress-section:hover": {
            color: "red",
            "& .rhap_progress-indicator": {
              display: "block",
              background: "#ffffff !important",
            },
          },
          "& .rhap_main-controls-button": {
            color: "#afafaf !important",
          },
          "& .rhap_main-controls-button:hover": {
            color: "#ffffff !important",
          },
        })}>
        <div className="wrapper">
          <div className="trackInfo">
            <div className="trackTitle">{playlist[activeTrack].title}</div>
            <div className="bandName">
              {artists
                .map<React.ReactNode>((artist, i) => {
                  return (
                    <Link
                      to="/bands/$bandSlug"
                      params={{ bandSlug: artist.slug }}>
                      {artist.name}
                    </Link>
                  );
                })
                .reduce((prev, curr) => [prev, <>, </>, curr])}
            </div>
          </div>
          <div className="playerUI">
            <AudioPlayer
              autoPlayAfterSrcChange={true}
              src={playlist[activeTrack].src}
              showSkipControls={true}
              showJumpControls={false}
              onClickPrevious={handleClickPrevious}
              onClickNext={handleClickNext}
              onEnded={onEnded}
              customAdditionalControls={[]}
              layout="stacked-reverse"
            />
            {/* <AudioPlayer
            autoPlayAfterSrcChange={true}
            src={playlist[activeTrack].src}
            showSkipControls={true}
            showJumpControls={false}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={onEnded}
            customAdditionalControls={[]}
            layout="stacked-reverse"
          /> */}
          </div>
          <div className="subInfoWrapper">{/* <a href="#">Donate</a> */}</div>
        </div>
      </Box>
    </ClientOnly>
  );
}
