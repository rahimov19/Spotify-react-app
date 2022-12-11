/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMusic } from "../redux/actions";
import { Link } from "react-router-dom";

export default function AlbumstoTry() {
  const dispatch = useDispatch();

  const fetchedmusic = useSelector((state) => state.music);
  useEffect(() => {
    dispatch(fetchMusic("something", "totry", 1500));
    console.log(fetchedmusic);
  }, []);
  return (
    <>
      {fetchedmusic.musicStore[2] ? (
        fetchedmusic.musicStore[2].totry.slice(0, 10).map((song) => (
          <div class="sidecards col-2">
            <Link to={`/album/${song.album.id}`}>
              <img class="col-4" src={song.album.cover_medium} alt="" />
              <p class="col-8 sidetext">{song.album.title}</p>
            </Link>
          </div>
        ))
      ) : (
        <div> </div>
      )}
    </>
  );
}
