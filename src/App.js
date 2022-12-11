import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import { Container, Row } from "react-bootstrap";
import Navbar from "./Components/Navbar";
import SearchArtist from "./Components/SearchArtist";
import SearchSongs from "./Components/SearchSongs";
import SearchAlbum from "./Components/SearchAlbum";
import SearchMain from "./Components/SearchMain";
import Mainpage from "./Components/Mainpage";
import ArtistPage from "./Components/ArtistPage";
import AlbumPage from "./Components/AlbumPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Components/Login";
import PlayerComponent from "./Components/PlayerComponent";
import LikedSongs from "./Components/LikedSongs";

function App() {
  const userData = useSelector((state) => state.login.user);

  return (
    <BrowserRouter>
      {userData === "" ? (
        <Login />
      ) : (
        <Container id="mainCon" fluid>
          <Navbar />
          <Row>
            <Sidebar />
            <Routes>
              <Route path="/searchartist" element={<SearchArtist />} />
              <Route path="/searchalbums" element={<SearchAlbum />} />
              <Route path="/searchsongs" element={<SearchSongs />} />
              <Route path="/search" element={<SearchMain />} />
              <Route path="/artist/:artistId" element={<ArtistPage />} />
              <Route path="/album/:albumId" element={<AlbumPage />} />
              <Route path="/" element={<Mainpage />} />
              <Route path="/favs" element={<LikedSongs />} />
            </Routes>
          </Row>
          <PlayerComponent />
        </Container>
      )}
    </BrowserRouter>
  );
}

export default App;
