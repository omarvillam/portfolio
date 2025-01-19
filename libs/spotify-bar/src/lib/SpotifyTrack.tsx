import React, {useRef, useState} from "react";
import ProgressBar from "./ProgressBar";
import Pause from "../icons/Pause";
import Play from "../icons/Play";
import Previous from "../icons/Previous";
import Next from "../icons/Next";
import {Track} from "../types";
import TrackInfo from "./TrackInfo";
import Speaker from "../icons/Speaker";
import SpeakerX from "../icons/SpeakerX";
import VolumeBar from "./VolumeBar";

interface SpotifyTrackProps {
  tracks: Track[];
  color?: string;
}

const SpotifyTrack: React.FC<SpotifyTrackProps> = ({tracks, color}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [previousVolume, setPreviousVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (newTime: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleNext = () => {
    const isPaused = !isPlaying;

    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }

    resetPlayback(isPaused, true);
  };

  const handlePrev = () => {
    const isPaused = !isPlaying;

    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else {
      setCurrentTrackIndex(tracks.length - 1);
    }

    resetPlayback(isPaused, true);
  };

  const resetPlayback = (shouldPause: boolean, forcePlay: boolean) => {
    setCurrentTime(0);
    setDuration(0);

    if (forcePlay || !shouldPause) {
      setIsPlaying(true);
      setTimeout(() => {
        audioRef.current?.play();
      }, 0);
    } else {
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
      if (audioRef.current) {
        audioRef.current.volume = 0;
      }
    } else {
      setVolume(previousVolume);
      if (audioRef.current) {
        audioRef.current.volume = previousVolume;
      }
    }
  };

  const handleTrackEnd = () => {
    if (currentTrackIndex < tracks.length - 1) {
      handleNext();
    } else {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  return (
    <div className="w-full mx-auto p-4 shadow-md flex items-center gap-4 justify-between select-none">
      <div className={"flex items-center gap-2 justify-start w-1/5"}>
        <TrackInfo {...currentTrack} />
      </div>
      <div className={"flex flex-col w-[60%]"}>
        <div className="flex gap-2 justify-center items-center mb-2">
          <Previous className={color} onClick={handlePrev}/>
          {isPlaying ? <Pause className={color} onClick={togglePlay}/> : <Play className={color} onClick={togglePlay}/>}
          <Next className={color} onClick={handleNext}/>
        </div>
        <audio
          ref={audioRef}
          src={currentTrack.url}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleTrackEnd}
        />
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
        />
      </div>
      <div className="flex items-center gap-4 w-1/5">
        <button onClick={toggleMute} className="ml-auto text-sm text-gray-600">
          {volume === 0 ? <SpeakerX/> : <Speaker/>}
        </button>
        <VolumeBar volume={volume} onVolumeChange={handleVolumeChange}/>
      </div>
    </div>
  );
};

export {SpotifyTrack};
