/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

export default function PlayerComponent() {
  const song = useSelector((state) => state.player.songBuffer);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const [isLooped, setLoop] = useState(false);
  const [volume, setVolume] = useState(1);

  function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.querySelector("volumeBar");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  }

  return (
    <>
      {song.album ? (
        <div className="row vh-25 footer justify-content-center align-items-center">
          <div className="col-4 footer-left d-flex align-items-center">
            <img
              className="album-cover-footer"
              src={song.album.cover}
              alt="player"
            />
            <div className="album-info d-flex flex-column ml-2">
              <span className="footer-song">{song.title}</span>
              <span className="footer-artist">{song.artist.name}</span>
            </div>
            <div className="album-info-icons ml-4">
              <i className="bi bi-heart-fill mr-2"></i>
              <i className="bi bi-fullscreen ml-2"></i>
            </div>
          </div>
          <div className="col-5 footer-middle d-flex flex-column align-items-center">
            <div className="player-controls d-flex justify-content-between align-items-center">
              <i className="bi bi-shuffle"></i>
              <i className="bi bi-skip-backward-circle-fill"></i>
              <div className="play-pause paused">
                <div
                  className="circle d-flex justify-content-center align-items-center "
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                    console.log("play pressed");
                  }}
                >
                  {isPlaying ? (
                    <i className="bi bi-pause-fill pause-footer"></i>
                  ) : (
                    <i className="bi bi-play-fill play-footer"></i>
                  )}
                </div>
              </div>
              <i className="bi bi-fast-forward-circle-fill"></i>
              <i
                className="bi bi-repeat"
                onClick={() => {
                  setLoop(!isLooped);
                }}
              ></i>
            </div>

            <ReactPlayer
              url={song.preview}
              playing={isPlaying}
              muted={isMuted}
              volume={volume}
              controls={false}
              loop={isLooped}
              id="player"
              autoPlay
            />
          </div>
          <div className="col-3 footer-right d-flex justify-content-end align-items-center">
            <div className="footer-right-icons">
              <i className="bi bi-list"></i>
              <i className="bi bi-broadcast"></i>
              <span onClick={() => setMuted(!isMuted)}>
                {isMuted ? (
                  <i className="bi bi-volume-mute-fill"></i>
                ) : (
                  <i className="bi bi-volume-up-fill"></i>
                )}
              </span>
            </div>
            <input
              id="volumeBar"
              type="range"
              value={isMuted ? 0 : volume}
              className="sound-operation"
              min="0"
              max="1"
              step="0.01"
              onInput={(e) => handleInputChange(e)}
              onChange={(e) => {
                setVolume(e.target.value);
                if (e.target.value === 0 && !isMuted) {
                  setMuted(true);
                } else if (e.target.value > 0 && isMuted) {
                  setMuted(false);
                }
              }}
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
