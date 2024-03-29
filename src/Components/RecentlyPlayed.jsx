/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic } from "../redux/actions";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function RecenlyPlayed() {
  const dispatch = useDispatch();

  const fetchedmusic = useSelector((state) => state.music);
  useEffect(() => {
    dispatch(fetchMusic("eminem", "recently", 1000));
    console.log(fetchedmusic);
  }, []);
  return (
    <>
      {fetchedmusic.musicStore[1] ? (
        fetchedmusic.musicStore[1].recently.slice(0, 10).map((song) => (
          <Col className="d-flex flex-column col-md-auto cardCol">
            <Col xs={12} className="sidecards">
              <Link to={`/artist/${song.artist.id}`}>
                <img class="col-4" src={song.album.cover_medium} alt="" />
                <p class="col-8 sidetext">{song.title}</p>
              </Link>
            </Col>
          </Col>
        ))
      ) : (
        <div> </div>
      )}
    </>
  );
}
