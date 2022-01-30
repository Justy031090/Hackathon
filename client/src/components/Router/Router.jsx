import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import SearchPage from "../../pages/SearchPage/SearchPage";
import SongPage from "../../pages/SongPage/SongPage";

const Router = () => {
  const song = {
    name: "Hero of our Time",
    artist: "NateWantsToBattle",
    genre: "Alternative",
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/song">
            <SongPage song={song} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
