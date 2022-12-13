/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearch } from "../redux/actions";

export default function SearchMain() {
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.searchquery);

  useEffect(() => {
    dispatch(fetchSearch(searchValue));
  }, [searchValue]);

  return (
    <>
      {searchData.data ? (
        <div className="col-10 main-content">
          <div className="row" id="undersearch">
            <div className="col-3" id="h3BR">
              <h3>Best Result:</h3>
            </div>
            <div className="col-9 pl-5" id="h3S">
              <h3>Songs:</h3>
            </div>
          </div>

          <div className="row" id="mainrow">
            <div className="col-3" id="leftSearch">
              <Link
                to={`/album/${searchData.data[0].album.id}`}
                className="aleftInside"
              >
                <div className="leftInside">
                  <img
                    src={searchData.data[0].album.cover_medium}
                    className="sideImg"
                    alt=""
                  />
                  <h3>{searchData.data[0].album.title}</h3>
                  <p>{searchData.data[0].artist.name}</p>
                </div>
              </Link>
            </div>
            <div className="col-9">
              <ul id="rightSearch">
                {searchData.data.slice(0, 6).map((song) => (
                  <li>
                    <span className="row col-12 songslist">
                      <img src={song.album.cover_small} alt="" />
                      <div className="spanText col-10">
                        <span>{song.artist.name} </span>
                        <span>{song.title}</span>
                      </div>
                      <span className="duration">
                        {/* {(song.duration - (song.duration %= 60)) / 60 +
                          (9 < song.duration ? ":" : ":0") +
                          song.duration} */}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h2 id="h2Albums">Albums</h2>
          <div className="row" id="searchAlbums">
            {searchData.data.slice(0, 6).map((album) => (
              <Link to={`/album/${album.album.id}`} className="col-2">
                <div className="col-12">
                  <div className="searchCard">
                    <img
                      className="cardimg"
                      src={album.album.cover_medium}
                      alt={"cardimg"}
                    />
                    <h5>{album.album.title}</h5>
                    <p>{album.artist.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <h2 id="h2Artists">Artists</h2>
          <div className="row" id="searchArtists">
            {searchData.data.slice(0, 6).map((artist) => (
              <Link to={`/artist/${artist.artist.id}`} className="col-2">
                <div className="col-12">
                  <div className="searchCard">
                    <img
                      className="cardimg"
                      src={artist.artist.picture_medium}
                      alt={"cardimg"}
                    />
                    <h5>{artist.artist.name}</h5>
                    <p>Artist</p>
                  </div>
                </div>{" "}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
