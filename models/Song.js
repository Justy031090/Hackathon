const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    author: {
        type: String,
        lowercase: true,
        trim: true,
    },
    genre: {
        type: String,
        lowercase: true,
        trim: true,
    },
    lyrics: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
    },
});

module.exports = Song = mongoose.model('song', SongSchema);
