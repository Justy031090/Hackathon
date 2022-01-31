import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';

const Navbar = ({ setSongData, songData, setVideoId }) => {
    const [inputValue, setInputValue] = useState('');

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const handleSearch = async () => {
        let url = 'http://localhost:5000/api/songs';
        if (process.env.NODE_ENV === 'production') {
            url = '/api/songs';
        }
        const { data } = await axios.post(url, {
            search: inputValue,
            config,
        });

        setSongData(data);
    };
    const handleYoutube = async () => {
        const { data } = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=${inputValue}&key=AIzaSyBqLSDYPmBhXcvbWqKFmEBVC5iQGZWQao4
            `
        );
        const videoId = data.items[0].id.videoId;
        setVideoId(videoId);
    };
    return (
        <nav>
            <Link to="/">Home</Link>
            <input
                className="search-input"
                type="text"
                placeholder="Input your keywords here...."
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                    handleYoutube();
                }}
            />
            <Link to="/song">
                <button
                    className="search-btn"
                    onClick={() => {
                        handleSearch();
                        handleYoutube();
                    }}
                >
                    Search
                </button>
            </Link>
        </nav>
    );
};
export default Navbar;
