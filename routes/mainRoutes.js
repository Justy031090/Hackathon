const express = require('express');
const router = express.Router();
const {
    getSongBySearch,
    getSongByCategory,
    getAllAuthorsSongs,
} = require('../controllers/mainRouteControls');

router.get('/', (req, res) => {
    try {
        res.send('hello');
    } catch (error) {
        res.send(error);
    }
});
router.post('/', getSongBySearch);
router.get('/category', getSongByCategory);
router.get('/author', getAllAuthorsSongs);

module.exports = router;
