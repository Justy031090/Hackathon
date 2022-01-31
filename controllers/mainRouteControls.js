const Song = require('../models/Song');
const mongoose = require('mongoose');
const getSongDetails = require('../utils/puppet');
const { detectLanguage, translateLyrics } = require('../utils/translate');

const getSongBySearch = async (req, res) => {
    try {
        const { search } = req.body;
        const song = await Song.findOne({ song: search });
        if (song) return res.send(song);
        const songs = await Song.find({ artist: search });
        if (songs.length) return res.send(songs);
        /* puppteer part*/
        const details = await getSongDetails(search);
        const { puppetLyrics } = details;
        const responseRu = await translateLyrics(puppetLyrics, 'RU');
        const dataRu = responseRu[0].translations[0].text;
        const responseAr = await translateLyrics(puppetLyrics, 'AR');
        const dataAr = responseAr[0].translations[0].text;
        const responseHe = await translateLyrics(puppetLyrics, 'HE');
        const dataHe = responseHe[0].translations[0].text;
        const responseEn = await translateLyrics(puppetLyrics, 'EN');
        const dataEn = responseEn[0].translations[0].text;
        const lyrics = {
            russian: dataRu,
            hebrew: dataHe,
            english: dataEn,
            arabic: dataAr,
        };
        const newSong = new Song({ ...details, lyrics });
        await newSong.save();
        res.send(newSong);
    } catch (e) {
        res.send(e.message);
    }
};

module.exports = { getSongBySearch };
