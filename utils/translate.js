const axios = require('axios');
const { Translate } = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate();

const detectLanguage = async (lyrics) => {
    try {
        let response = await translate.detect(lyrics);
        return response[0].language;
    } catch (e) {
        return console.log(e.message);
    }
};

const translateLyrics = async (lyrics, targetLanguage) => {
    try {
        axios.post(
            `https://translation.googleapis.com/language/translate/v2?q=my%20name&target=${targetLanguage}&key=${process.env.TRANSLATE}`
        );
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = { translateLyrics, detectLanguage };
