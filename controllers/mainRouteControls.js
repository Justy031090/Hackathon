const Song = require('../models/Song');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');

const getSongByCategory = async (req, res) => {
    const { category } = req.body;
    const songs = await Song.find({ genre: category });
    if (songs) return res.send(songs);
    /* puppteer part*/
};
const getSongBySearch = async (req, res) => {
    const { search } = req.body;
    const song = await Song.findOne({ name: search });
    if (song) return res.send(song);
    const songs = await Song.find({ author: search });
    if (songs) return res.send(songs);
    /* puppteer part*/
};

const getAllAuthorsSongs = async (req, res) => {
    const { lookingFor } = req.body;
    const songs = await Song.find({ author: lookingFor });
    if (songs) return res.send(songs);
    /* puppteer part*/
};
module.exports = { getSongByCategory, getSongBySearch, getAllAuthorsSongs };
