import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setSearchAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const user = useSelector((state) => state.login.user);
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    navigate("/search");
    dispatch(setSearchAction(e.target.value));
  };

  return (
    <div className="row m-3 top-content-bar">
      <div className="nav-controls d-flex justify-content-between align-items-center">
        <div className="nav-circle mr-3 d-flex justify-content-center align-items-center">
          <i className="bi bi-caret-left" onClick={() => navigate(-1)}></i>
        </div>
        <div className="nav-circle-inactive d-flex justify-content-center align-items-center">
          <i className="bi bi-caret-right" onClick={() => navigate(+1)}></i>
        </div>
        <i className="bi bi-search lupa"> </i>{" "}
        <input
          type="text"
          id="searchbar"
          placeholder="What do you want to Listen"
          onChange={(e) => handleSearch(e)}
        />
      </div>

      {location.pathname === "/search" ||
      location.pathname === "/searchsongs" ||
      location.pathname === "/searchartist" ||
      location.pathname === "/searchalbums" ? (
        <div id="navbarbuttons">
          {" "}
          <button
            class={
              location.pathname === "/search"
                ? "btn btn-dark searchbuttons active"
                : "btn btn-dark searchbuttons"
            }
            id="searchAllButton"
            onClick={() => navigate("/search")}
          >
            All
          </button>
          <button
            class={
              location.pathname === "/searchsongs"
                ? "btn btn-dark searchbuttons active"
                : "btn btn-dark searchbuttons"
            }
            id="searchSongsButton"
            onClick={() => navigate("/searchsongs")}
          >
            Songs
          </button>
          <button
            class={
              location.pathname === "/searchartist"
                ? "btn btn-dark searchbuttons active"
                : "btn btn-dark searchbuttons"
            }
            id="searchArtistsButton"
            onClick={() => navigate("/searchartist")}
          >
            Artists
          </button>
          <button
            class={
              location.pathname === "/searchalbums"
                ? "btn btn-dark searchbuttons active"
                : "btn btn-dark searchbuttons"
            }
            id="searchAlbumsButton"
            onClick={() => navigate("/searchalbums")}
          >
            Albums
          </button>{" "}
        </div>
      ) : (
        <></>
      )}

      <div className="user-menu d-flex align-items-center">
        <img className="user-image" src="img/profile-image.jpg" alt="user" />
        <span id="username">{user}</span>
        <i class="bi bi-caret-down-fill"></i>
      </div>
    </div>
  );
}
