import React from 'react'
import {SpotifyTrack} from "@portfolio/libs/spotify-bar";

function SpotifyWrapper() {
  // Special thanks to Pixabay for hosting all the assets and music files, and to the artists for creating such amazing music!
  const tracks = [
    {url: "https://cdn.pixabay.com/download/audio/2024/09/20/audio_2abb91afcb.mp3?filename=lofi-song-backyard-by-lofium-242713.mp3", name: "Backyard", thumbnail: "https://cdn.pixabay.com/audio/2024/09/20/16-46-04-274_200x200.jpg", artistName: "Lofium", artistLink: "https://pixabay.com/users/lofium-30660321/"},
    {url: "https://cdn.pixabay.com/download/audio/2024/12/05/audio_7947ba45de.mp3?filename=lofi-chill-jazz-272869.mp3", name: "Chill Jazz", thumbnail: "https://cdn.pixabay.com/audio/2024/12/05/21-22-44-844_200x200.jpg", artistName: "Sigma Music Art", artistLink: "https://pixabay.com/users/sigmamusicart-36860929/"},
    {url: "https://cdn.pixabay.com/download/audio/2023/07/30/audio_e0908e8569.mp3?filename=good-night-lofi-cozy-chill-music-160166.mp3", name: "Good Night", thumbnail: "https://cdn.pixabay.com/audio/2023/07/30/13-02-32-179_200x200.jpg", artistName: "FASSounds", artistLink: "https://pixabay.com/users/fassounds-3433550/"},
  ];

  return (
    <SpotifyTrack tracks={tracks} color={"text-gray-300 hover:text-white"}/>
  )
}

export default SpotifyWrapper;
