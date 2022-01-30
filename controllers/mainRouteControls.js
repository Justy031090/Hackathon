const Song = require('../models/Song');

const getSongByCategory = async (req, res) => {
    const { category } = req.body;
    const song = await Song.find({
        /*SONG IDENTIFIER SHOULD BE HERE */
    });
    if (song) return req.send(song);
};
const getSongBySearch = async (req, res) => {
    const { category } = req.body;
    const song = await Song.find({
        /*SONG IDENTIFIER SHOULD BE HERE */
    });
    if (song) return req.send(song);
};
module.exports = { getSongByCategory, getSongBySearch };
