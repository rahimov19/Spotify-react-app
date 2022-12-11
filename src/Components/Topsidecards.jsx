/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic } from "../redux/actions";
import { Link } from "react-router-dom";

export default function Topsidecards() {
  const dispatch = useDispatch();
  const fetchedmusic = useSelector((state) => state.music);
  useEffect(() => {
    dispatch(fetchMusic("hello", "topside", 500));
    console.log(fetchedmusic);
  }, []);
  return (
    <>
      {fetchedmusic.musicStore[0] ? (
        fetchedmusic.musicStore[0].topside.slice(0, 10).map((song) => (
          <div className="sidecards col-2">
            <Link to={`/album/${song.album.id}`}>
              <img className="col-4" src={song.album.cover_medium} alt="" />
              <p className="col-8 sidetext">{song.album.title}</p>
            </Link>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
}
