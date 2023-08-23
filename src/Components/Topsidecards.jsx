/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic } from "../redux/actions";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function Topsidecards() {
  const dispatch = useDispatch();
  const fetchedmusic = useSelector((state) => state.music);
  useEffect(() => {
    dispatch(fetchMusic("hello", "topside", 500));
  }, []);
  return (
    <>
      {fetchedmusic.musicStore[0] ? (
        fetchedmusic.musicStore[0].topside.slice(0, 10).map((song) => (
          <Col className="d-flex flex-column col-md-auto cardCol">
            <Col xs={12} className="sidecards">
              <Link to={`/album/${song.album.id}`}>
                <img className="col-4" src={song.album.cover_medium} alt="" />
                <p className="col-8 sidetext">{song.album.title}</p>
              </Link>
            </Col>
          </Col>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
}
