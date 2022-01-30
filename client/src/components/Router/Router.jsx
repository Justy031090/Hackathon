import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import SearchPage from "../../pages/SearchPage/SearchPage";
import SongPage from "../../pages/SongPage/SongPage";

const Router = () => {
  const [songData, setSongData] = useState(null);
  const [videoId, setVideoId] = useState(null);
  // const song = {
  //   name: "Hero of our Time",
  //   artist: "NateWantsToBattle",
  //   genre: "Alternative",
  // };

  // const handleSongData = (data) => {
  //   setSongData(data);
  // };

  return (
    <>
      <BrowserRouter>
        <Navbar
          setSongData={setSongData}
          songData={songData}
          setVideoId={setVideoId}
          videoId={videoId}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/song">
            <SongPage songData={songData} videoId={videoId} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
