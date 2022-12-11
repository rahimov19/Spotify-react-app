/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearch } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function SearchArtist() {
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
                  className="searchArtistCard col-2 mb-3"
                  onClick={() => navigate(`/artist/${album.artist.id}`)}
                >
                  <img
                    className="artistSearchImg"
                    src={album.artist.picture_medium}
                    alt={""}
                  />
                  <h5>{album.artist.name}</h5>
                  <p>Artist</p>
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
