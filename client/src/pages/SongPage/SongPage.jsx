import React from 'react';
import { Link } from 'react-router-dom';
import './SongPage.css';
const SongPage = ({ song, songData, videoId }) => {
    return (
        <>
            {songData && (
                <div className="song-page">
                    <button className="back-btn">
                        <Link to="/search">Back</Link>
                    </button>
                    <header className="poster">
                        <img
                            src={songData.poster}
                            className="img-placeholder"
                            alt="Better Look at the Mirror, you're beautifull."
                        />
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
                            title="'"
                        ></iframe>
                        <div className="lyrics-container">
                            <h2>Lyrics</h2>
                            <p>{songData.lyrics}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default SongPage;
