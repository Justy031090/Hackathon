import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';

const Navbar = ({ setSongData, songData, setVideoId }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = async () => {
        const { data } = await axios.post('/api/songs', {
            search: inputValue,
        });
        console.log(data);
        setSongData(data);
        console.log(process.env);
    };
    const handleYoutube = async () => {
        const { data } = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=${inputValue}&key=AIzaSyDWITkJ-1nt_mBdgC55w4uDmdRfvmKdkFA`
        );
        const videoId = data.items[0].id.videoId;
        setVideoId(videoId);
    };
    return (
        <nav>
            <Link to="/">Home</Link>
            <input
                type="text"
                placeholder="Input your keywords here...."
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    handleSearch();
                    handleYoutube();
                }}
            >
                <Link to="/song">Search</Link>
            </button>
            {/* <Dropdown defaultOption="Select a Category">
        <option>Pop</option>
        <option>Rock</option>
        <option>EDM</option>
      </Dropdown>
      <Dropdown defaultOption="Select a Language">
        <option>Hebrew</option>
        <option>English</option>
        <option>Arabic</option>
      </Dropdown> */}
        </nav>
    );
};
export default Navbar;
