import React from "react";
import { Link } from "react-router-dom";
import "./SongPage.css";
const SongPage = ({ song, songData, videoId }) => {
  return (
    <>
      {songData && (
        <div className="song-page">
          <button className="back-btn">
            <Link to="/search">Back</Link>
          </button>
          <header className="poster">
            <img src={songData.poster} className="img-placeholder" />
            <div className="info-container">
              <p>{songData.song}</p>
              <div className="genre-container">
                <p>{songData.artist}</p>
                <p>{songData.genre}</p>
              </div>
            </div>
          </header>
          <div className="main-content">
            {/* <div className="video-container">VIDEO</div> */}
            <iframe
              src={`http://www.youtube.com/embed/${videoId}`}
              className="video-container"
            ></iframe>
            <div className="lyrics-container">
              <h2>Lyrics</h2>
              {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            qui accusantium ipsam, aut nulla reiciendis eos distinctio
            repellendus, ratione expedita consectetur esse neque perferendis,
            laudantium beatae ullam cum alias? Fuga, sunt, quis beatae amet
            laboriosam vero ratione delectus distinctio repudiandae quaerat
            voluptatum doloremque similique tempore facilis velit expedita
            accusantium eligendi voluptas perspiciatis voluptate ullam earum!
            Repellendus beatae illo quasi ex quaerat excepturi sunt pariatur
            tenetur eaque illum sint hic voluptas amet sequi unde, sit, error
            expedita nobis commodi adipisci quo at. Ullam nostrum ad minus
            praesentium. Veritatis eveniet animi labore suscipit eos officiis
            tempore ex. Delectus reprehenderit ut eveniet quisquam?
          </p> */}
              <p>{songData.lyrics}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SongPage;
