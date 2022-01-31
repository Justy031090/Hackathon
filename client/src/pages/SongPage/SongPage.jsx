import React, { useState } from 'react';
import './SongPage.css';
const SongPage = ({ song, songData, videoId }) => {
    const [lang, setLang] = useState('english');

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
                            <p>
                                <strong>{songData.song}</strong>
                            </p>
                            <div className="genre-container">
                                <p>
                                    <strong>Artist:</strong> {songData.artist}
                                </p>
                                <p>
                                    <strong>Genre:</strong> {songData.genre}
                                </p>
                            </div>
                        </div>
                    </header>
                    <div className="main-content">
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
                    <div className="select-container">
                        <label for="language" className="language-label">
                            Choose a language:
                        </label>
                        <select
                            name="language"
                            id="language"
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="russian">Russian</option>
                            <option value="english">English</option>
                            <option value="arabic">Arabic</option>
                            <option value="hebrew">Hebrew</option>
                        </select>
                    </div>
                </div>
            )}
        </>
    );
};
export default SongPage;
