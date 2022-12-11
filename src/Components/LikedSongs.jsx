import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSongAction } from "../redux/actions";

export default function LikedSongs() {
  const dispatch = useDispatch();
  const songList = useSelector((state) => state.player.favSongs);

  return (
    <>
      {songList ? (
        <div className="col-10 main-content">
          <div className="row" id="undersearch">
            <div className="col-3" id="h3BR">
              <h3>Search Result:</h3>
            </div>
          </div>

          <div className="row" id="mainrow">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Album</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>

              <tbody id="tablebody">
                {songList.map((song, i) => (
                  <tr
                    onClick={() => dispatch(playSongAction(song))}
                    key={song.id}
                  >
                    <th scope="row" className="rowNumber">
                      {[i + 1]}
                    </th>
                    <td>
                      <div className="songtitle">
                        <img src={song.album.cover_small} alt="" />
                        <div className="col-10">
                          <div className="spanText col-10">
                            <span>{song.artist.name} </span>
                            <span>{song.title}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>{song.album.title}</span>
                    </td>
                    <td>
                      {(song.duration - (song.duration %= 60)) / 60 +
                        (9 < song.duration ? ":" : ":0") +
                        song.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
