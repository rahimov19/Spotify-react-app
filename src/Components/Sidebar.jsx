import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { playSongAction } from "../redux/actions";

export default function Sidebar() {
  const songList = useSelector((state) => state.player.favSongs);
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-2 sidebar pl-3">
        <Link to={"/"}>
          <img className="logo mt-2" src="img/logo.png" alt="logo" />
        </Link>

        <div className="links-container d-flex flex-column mt-3 ml-0">
          <div className="link d-flex p-2 pl-0 mt-1">
            <i className="fa-solid fa-house mt-1"></i>
            <Link to={"/"} className="ml-4">
              Home
            </Link>
          </div>
          <div className="link d-flex p-2 mt-1">
            <i className="fa-solid fa-magnifying-glass mt-1"></i>
            <Link to={"/search"} className="ml-4">
              Search
            </Link>
          </div>
          <div className="link d-flex p-2 mt-1">
            <i className="fa-solid fa-book mt-1"></i>
            <Link to="/favs" className="ml-4">
              Your Library
            </Link>
          </div>
        </div>
        <div className="box-links d-flex flex-column mt-4">
          <div className="box-link d-flex p-2">
            <div className="playlist-box d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus"></i>
            </div>
            <a href="/favs" className="ml-3">
              Create Playlist
            </a>
          </div>
          <div className="box-link d-flex p-2">
            <div className="liked-box d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-heart"></i>
            </div>
            <Link to="/favs" className="ml-3">
              Liked Songs
            </Link>
          </div>
        </div>
        <div className="playlists mt-2 pt-1 overflow-auto">
          {songList ? (
            songList.map((song) => (
              <p className="m-0" onClick={() => dispatch(playSongAction(song))}>
                {song.artist.name} - {song.title}
              </p>
            ))
          ) : (
            <div>Nothing</div>
          )}
        </div>
        <div className="install mt-3 d-flex">
          <div className="circle d-flex justify-content-center align-items-center mt-1 mr-2">
            <i className="fa-solid fa-arrow-down"></i>
          </div>
          <a href="/main">Install App</a>
        </div>
      </div>
    </>
  );
}
