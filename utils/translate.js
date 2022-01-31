const axios = require('axios');
const dotenv = require('dotenv');
const { Translate } = require('@google-cloud/translate').v2;
dotenv.config();
const translate = new Translate();

const detectLanguage = async (lyrics) => {
    try {
        let response = await translate.detect(lyrics);
        return response[0].language;
    } catch (e) {
        return console.log(e.message);
    }
};

const options = (lyrics, targetLanguage) => {
    return {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
            to: targetLanguage,
            'api-version': '3.0',
            profanityAction: 'NoAction',
            textType: 'plain',
        },
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
            'x-rapidapi-key': process.env.TRANSLATE,
        },
        data: [{ Text: lyrics }],
    };
};

const translateLyrics = async (lyrics, targetLanguage) => {
    try {
        const { data } = await axios.request(options(lyrics, targetLanguage));
        return data;
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = { translateLyrics, detectLanguage };
