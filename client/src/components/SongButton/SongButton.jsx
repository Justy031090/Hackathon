import React from "react";
import { Link } from "react-router-dom";
import "./SongButton.css";
const SongButton = ({ song }) => {
  return (
    <Link className="song-container" to="/song">
      <div className="info-container">
        <p>{song.name}</p>
        <div className="genre-container">
          <p>{song.artist}</p>
          <p>{song.genre}</p>
        </div>
      </div>
      <p className="lyrics-container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        corporis cumque ea id. Sequi alias, consequuntur illo ex quasi
        voluptate.
      </p>
      <div className="img-placeholder">IMAGE</div>
    </Link>
  );
};
export default SongButton;
