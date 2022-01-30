const Song = require('../models/Song');
const mongoose = require('mongoose');
const getSongDetails = require('../utils/puppet');

// const getSongByCategory = async (req, res) => {
//     const { category } = req.body;
//     const songs = await Song.find({ genre: category });
//     if (songs) return res.send(songs);
//     /* puppteer part*/
// };
const getSongBySearch = async (req, res) => {
    try {
        const { search } = req.body;
        const song = await Song.findOne({ song: search });
        if (song) return res.send(song);
        const songs = await Song.find({ artist: search });
        if (songs.length) return res.send(songs);
        /* puppteer part*/
        const details = await getSongDetails(search);
        const newSong = new Song(details);
        await newSong.save();
        res.send(newSong);
    } catch (e) {
        res.send(e.message);
    }
};

// const getAllAuthorsSongs = async (req, res) => {
//     const { lookingFor } = req.body;
//     const songs = await Song.find({ author: lookingFor });
//     if (songs) return res.send(songs);
//     /* puppteer part*/
// };
module.exports = { getSongBySearch };
