const express = require('express');
const connectDB = require('./db/mongoose');
const songs = require('./routes/songs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//connecting to atlas
connectDB();
app.use('/api/songs', songs);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
