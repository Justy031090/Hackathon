const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    song: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    artist: {
        type: String,
        lowercase: true,
        trim: true,
    },
    genre: {
        type: String,
        lowercase: true,
        trim: true,
    },
    lyrics: {},
    poster: {
        type: String,
    },
});

module.exports = Song = mongoose.model('song', SongSchema);
