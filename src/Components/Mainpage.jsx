import React from "react";
import AlbumstoTry from "./AlbumstoTry";
import RecentlyPlayed from "./RecentlyPlayed";
import Topsidecards from "./Topsidecards";

export default function Mainpage() {
  return (
    <>
      <div class="col-12 main-content">
        <div class="row" id="undersearch">
          <h2 class="pl-3 mb-4 mt-2">Good Morning</h2>
          <div class="col-12 pl-3 row " id="topsidecards">
            <Topsidecards />
          </div>
        </div>

        <div class="row pl-3 mt-3" id="mainrow">
          <h3>Recently Played</h3>
          <div class="col-12 pl-3 row" id="firstAlbumRow">
            <RecentlyPlayed />
          </div>

          <h3 class="mt-3">Albums to Try</h3>
          <div class="col-12 pl-3 row" id="secondAlbumRow">
            <AlbumstoTry />
          </div>
        </div>

        <div class="col-10 main-content"></div>
      </div>
    </>
  );
}
