import React, { useState } from 'react';
import './SongPage.css';
const SongPage = ({ song, songData, videoId }) => {
    const [lang, setLang] = useState('russian');

    const handleChange = (e) => {
        setLang(e.target.value);
    };
    return (
        <>
            {songData && (
                <div className="song-page">
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
                            <p>{songData.lyrics[lang]}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default SongPage;
