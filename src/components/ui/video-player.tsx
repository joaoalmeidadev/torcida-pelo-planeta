"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

const PlayIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask0_play_icon"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="44"
      height="44"
    >
      <path d="M44 0H0V44H44V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_play_icon)">
      <path
        d="M21.945 41.7083C11.0916 41.7083 2.23657 32.8716 2.23657 22C2.23657 11.1283 11.0916 2.29163 21.945 2.29163C32.7983 2.29163 41.6533 11.1283 41.6533 22C41.6533 32.8716 32.8166 41.7083 21.945 41.7083ZM21.945 5.04163C12.5949 5.04163 4.98657 12.65 4.98657 22C4.98657 31.35 12.5949 38.9583 21.945 38.9583C31.295 38.9583 38.9033 31.35 38.9033 22C38.9033 12.65 31.295 5.04163 21.945 5.04163Z"
        fill="currentColor"
      />
      <path
        d="M19.3601 31.1492C18.5535 31.1492 17.7834 30.9475 17.1051 30.5625C15.5284 29.6459 14.6484 27.8492 14.6484 25.5025V19.3609C14.6484 17.0142 15.5101 15.2175 17.0868 14.3008C18.6635 13.3842 20.6618 13.5308 22.6968 14.7042L28.0135 17.7658C30.0485 18.9392 31.1668 20.5892 31.1668 22.4225C31.1668 24.2375 30.0485 25.9059 28.0135 27.0792L22.6968 30.1409C21.5601 30.8192 20.4051 31.1492 19.3601 31.1492Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="currentColor" />
  </svg>
);

const VolumeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z"
      fill="currentColor"
    />
  </svg>
);

const MuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.69 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z"
      fill="currentColor"
    />
  </svg>
);

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && videoRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const percentage = x / width;
      const newTime = percentage * videoRef.current.duration;

      videoRef.current.currentTime = newTime;
      setProgress(percentage * 100);
    }
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (volumeRef.current && videoRef.current) {
      const rect = volumeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const newVolume = Math.max(0, Math.min(1, x / width));

      setVolume(newVolume);
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      videoRef.current.muted = newMutedState;
      if (!newMutedState && volume === 0) {
        setVolume(1);
        videoRef.current.volume = 1;
      }
    }
  };

  return (
    <div
      className="group relative aspect-9/16 w-full max-w-[380px] overflow-hidden rounded-[24px] border border-white/20 bg-black md:aspect-video"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster="/video-thumbnail.png"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onClick={togglePlay}
        playsInline
      >
        <source
          src="/Video%20Comercial%20TPI%20CBF%20Vertical.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />
        <source src="/Video%20Conceito%20TPI%20CBF%20Final%20.mp4" type="video/mp4" />
      </video>

      {!isPlaying && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity">
          <button onClick={togglePlay}>
            <Image src="/play.svg" alt="Play" width={44} height={44} />
          </button>
        </div>
      )}

      <div
        className={`absolute right-0 bottom-0 left-0 z-20 bg-linear-to-t from-black/80 to-transparent px-4 py-4 transition-opacity duration-300 ${
          isHovering && isPlaying ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          <div
            ref={progressRef}
            className="h-1.5 w-full cursor-pointer rounded-full bg-white/30 transition-all hover:h-2"
            onClick={handleProgressClick}
          >
            <div
              className="relative h-full rounded-full bg-white"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 rounded-full bg-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100" />
            </div>
          </div>

          <div className="flex items-center justify-between text-white">
            <button onClick={togglePlay} className="p-1 transition-colors hover:text-gray-200">
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>

            <div className="group/volume flex items-center gap-2">
              <button onClick={toggleMute} className="p-1 transition-colors hover:text-gray-200">
                {isMuted || volume === 0 ? <MuteIcon /> : <VolumeIcon />}
              </button>
              <div
                ref={volumeRef}
                className="relative flex h-1 w-0 cursor-pointer items-center rounded-full bg-white/30 transition-all duration-300 group-hover/volume:w-20"
                onClick={handleVolumeChange}
                onMouseMove={(e) => e.buttons === 1 && handleVolumeChange(e)}
              >
                <div
                  className="relative h-full rounded-full bg-white"
                  style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
                >
                  <div className="absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 rounded-full bg-white opacity-0 shadow-sm transition-opacity group-hover/volume:opacity-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
