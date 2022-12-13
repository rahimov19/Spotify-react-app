/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavActoin, playSongAction } from "../redux/actions";

export default function ArtistPage() {
  const params = useParams();
  const artistID = params.artistId;
  const dispatch = useDispatch();
  const [artistData, setArtistData] = useState();
  const [tracklist, setTracklist] = useState();

  useEffect(() => {
    getArtist();
  }, []);

  let getArtist = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistID}`
    );
    const artist = await response.json();
    console.log(artist);
    setArtistData(artist);
    console.log(artistData);
    const trackData = await artist.tracklist;
    const response2 = await fetch(trackData);
    const data = await response2.json();
    setTracklist(data);
    console.log(tracklist);
  };
  return (
    <>
      {artistData || tracklist ? (
        <div className="col-10 main-content">
          <div className="row">
            <img className="banner" src={artistData.picture_xl} alt="banner" />
          </div>
          <div className="row flex-column">
            <div className="artist-info d-flex flex-column justify-content-end ml-4">
              <div className="verified-container d-flex">
                <img
                  className="tick mr-1"
                  src="/img/verified.png"
                  alt="verified"
                />
                <span className="verified">Verified Artist</span>
              </div>

              <span className="artist">{artistData.name}</span>
              <span className="listeners">
                <span>Monthly listeners {artistData.nb_fan}</span>
              </span>
            </div>
            <div className="artist-container mt-3">
              <div className="row w-25 mt-3 ml-3 d-flex align-items-center">
                <div className="green-circle d-flex justify-content-center align-items-center">
                  <i class="bi bi-play-fill"></i>
                </div>
                <div className="follow ml-4 mt-1">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-light"
                  >
                    Follow
                  </button>
                </div>
                <div className="more-info ml-4 mt-2">
                  <i class="bi bi-three-dots"></i>
                </div>
              </div>
              <div className="headings d-flex justify-content-between mt-4">
                <span className="ml-3">Popular</span>
                <span>Artist Pick</span>
              </div>
              <div className="content h-100 d-flex">
                <div className="songs-container mt-3 ml-4 d-flex flex-column">
                  {tracklist ? (
                    tracklist.data.map((song, i) => (
                      <div
                        className="song d-flex align-items-center mb-3"
                        onClick={() => dispatch(playSongAction(song))}
                      >
                        <div className="track-number">{i + 1}</div>
                        <div className="album-thumbnail-container">
                          <img
                            className="album-thumbnail mr-3"
                            src={song.album.cover_small}
                            alt="album"
                          />
                        </div>
                        <div className="song-title">
                          <span>{song.title}</span>
                        </div>
                        <div className="play-counter">
                          <span>{song.rank.toLocaleString("en-US")}</span>
                        </div>
                        <i
                          className="bi bi-heart iconheart"
                          onClick={() => dispatch(addToFavActoin(song))}
                        ></i>
                        <span className="song-length mr-3">
                          {(song.duration - (song.duration %= 60)) / 60 +
                            (9 < song.duration ? ":" : ":0") +
                            song.duration}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className="artist-pick h-25 d-flex">
                  <img
                    className="artist-pick-album-cover"
                    src={artistData.picture_xl}
                    alt="cover"
                  />
                  <div className="artist-pick-info d-flex flex-column ml-3 mt-1">
                    <span className="artist-pick-artist">
                      {artistData.name}
                    </span>
                    <span className="pick-category">Playlist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
