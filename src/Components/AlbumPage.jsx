/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavActoin, playSongAction } from "../redux/actions";
import { Col, Row } from "react-bootstrap";
export default function AlbumPage() {
  const dispatch = useDispatch();
  const params = useParams();
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
            <div className="col-12 p-0">
              <ul className="list-group" id="tracklist">
                <Row className="list-group-item row1 col-12 d-flex justify-content-between tracklist-album p-0">
                  <Col xs={1}>
                    <span className="text-start d-flex justify-content-center align-items-center border-bottom">
                      #
                    </span>
                  </Col>
                  <Col xs={10} className="w-100">
                    <span className=" border-bottom d-flex justify-content-start align-items-center">
                      Title
                    </span>
                  </Col>
                  <Col xs={1} className="">
                    <i className=" d-flex justify-content-center align-items-end bi bi-clock border-bottom mt-2"></i>
                  </Col>
                </Row>

                {albumData.tracks.data.map((song, i) => (
                  <Row
                    className="list-group-item row1 col-12 d-flex justify-content-center tracklist-album p-0"
                    key={song.id}
                    onClick={() => dispatch(playSongAction(song))}
                  >
                    <Col xs={1} className="song  d-flex justify-content-center">
                      <span>{[i + 1]}</span>
                    </Col>
                    <Col xs={10} className="artisttitle">
                      <span>{song.title}</span>
                      <span className="fw-light">{song.artist.name} </span>
                    </Col>
                    <Col xs={1} className="song-length">
                      <i
                        className="bi bi-heart iconheart"
                        onClick={() => dispatch(addToFavActoin(song))}
                      ></i>
                      {(song.duration - (song.duration %= 60)) / 60 +
                        (9 < song.duration ? ":" : ":0") +
                        song.duration}
                    </Col>
                  </Row>
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
