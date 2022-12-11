/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { useSelector } from "react-redux";
import ReactAudioPlayer from "react-audio-player";

export default function PlayerComponent() {
  const song = useSelector((state) => state.player.songBuffer);

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
              <div className="play-pause paused" onclick="playerControls()">
                <div className="circle d-flex justify-content-center align-items-center">
                  <i className="bi bi-play-fill d-none play-footer"></i>
                  <i className="bi bi-pause-fill pause-footer"></i>
                </div>
              </div>
              <i className="bi bi-fast-forward-circle-fill"></i>
              <i className="bi bi-repeat"></i>
            </div>

            <ReactAudioPlayer
              src={song.preview}
              controls
              id="player"
              autoPlay
            />
          </div>
          <div className="col-3 footer-right d-flex justify-content-end align-items-center">
            {/* <div className="footer-right-icons">
              <i className="bi bi-list"></i>
              <i className="bi bi-broadcast"></i>
              <i className="bi bi-volume-up-fill"></i>
            </div>
            <div className="volume-bar"></div> */}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
