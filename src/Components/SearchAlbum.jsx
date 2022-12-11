/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearch } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function SearchAlbum() {
  const searchData = useSelector((state) => state.search.searchData);
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.searchquery);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchSearch(searchValue));
  }, [searchValue]);

  return (
    <>
      {searchData ? (
        <div className="col-10 main-content">
          <div className="row" id="undersearch">
            <div className="col-3" id="h3BR">
              <h3>Search Result:</h3>
            </div>
          </div>

          <div className="row" id="mainrow">
            <div id="artistsbody" className="row col-12 ml-3">
              {searchData.data.slice(0, 30).map((album) => (
                <div
                  className="searchAlbumCard col-2 mb-3"
                  onClick={() => navigate(`/album/${album.album.id}`)}
                >
                  <img
                    className="albumsSearchImg"
                    src={album.album.cover_medium}
                    alt={""}
                  />
                  <h5>{album.album.title}</h5>
                  <p>{album.artist.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Nothing to display</h1>
        </div>
      )}
    </>
  );
}
