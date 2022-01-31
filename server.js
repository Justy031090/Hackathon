const express = require('express');
const connectDB = require('./db/mongoose');
const songs = require('./routes/mainRoutes');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use('/api/songs', songs);

app.use((error, req, res, next) => {
    if (res.headerSent) return next(error);
    res.status(error.code || 500);
    res.json({ message: error.message || 'Server Error' });
});

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

//THIS WAS BUILT BY TRUE MASTERS !
