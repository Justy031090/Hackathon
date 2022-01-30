import React from "react";
import "./SongButton.css";
const SongButton = ({ song }) => {
  return (
    <div className="song-container">
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
    </div>
  );
};
export default SongButton;
