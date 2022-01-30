import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
// import Navbar from "../Navbar/Navbar";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
