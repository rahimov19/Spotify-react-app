/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavActoin } from "../redux/actions";
export default function AlbumPage() {
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);
  const albumID = params.albumId;
  const [albumData, setAlbumData] = useState();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumID
    );
    const album = await response.json();
    setAlbumData(album);
    console.log(albumData);
  }

  return (
    <>
      {albumData ? (
        <div id="album-info-container">
          <div className="col-12" id="toppart">
            <div className="row">
              <div className="col-2" id="albumLeft">
                <img
                  id="album-cover-album"
                  src={albumData.cover_xl}
                  alt="album"
                />
              </div>
              <div className="col-10" id="albumRight">
                <div className="album-text">
                  <p className="album-small-text">ALBUM</p>
                  <h2 className="album-name">{albumData.title}</h2>
                  <div>
                    <img
                      id="artist-small-pic"
                      src={albumData.artist.picture_small}
                      alt="artist"
                    />
                    <span> {albumData.artist.name} </span>
                    <span className="pl-1">{albumData.release_date} </span>
                    <span>{albumData.nb_tracks} songs </span>
                    <span>
                      {(albumData.duration - (albumData.duration %= 60)) / 60 +
                        (9 < albumData.duration ? ":" : ":0") +
                        albumData.duration}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12" id="main-container-album">
            {/* <div className="row justify-content-start">
              <div className="col-1 mt-3 play-button">
                <i className="bi bi-play-circle-fill" id="play-icon"></i>
              </div>
              <div className="col-1 mt-3">
                <i className="bi bi-heart"></i>
              </div>
              <div className="col-1 mt-3">
                <i className="bi bi-three-dots"></i>
              </div>
            </div> */}
            <div className="col-12 p-0">
              <ul className="list-group" id="tracklist">
                <div className="row">
                  <li className="list-group-item row1 col-12 d-flex justify-content-between tracklist-album p-0">
                    <span className="col-1 text-start align-items-center border-bottom">
                      #
                    </span>

                    <span className=" col-10 border-bottom">Title</span>
                    <i className="col-1 text-center bi bi-clock border-bottom"></i>
                  </li>
                </div>
                {albumData.tracks.data.map((song, i) => (
                  <li
                    className="list-group-item row1 col-12 d-flex justify-content-between tracklist-album p-0"
                    key={song.id}
                  >
                    <div className="song row">
                      <span>{[i + 1]}</span>
                      <div className="artisttitle">
                        <span>{song.title}</span>
                        <span className="fw-light">{song.artist.name} </span>
                      </div>
                      <span className="song-length">
                        <i
                          className="bi bi-heart iconheart"
                          onClick={() => dispatch(addToFavActoin(song))}
                        ></i>
                        {(song.duration - (song.duration %= 60)) / 60 +
                          (9 < song.duration ? ":" : ":0") +
                          song.duration}
                      </span>
                    </div>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
