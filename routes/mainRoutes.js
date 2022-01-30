const express = require('express');
const router = express.Router();
const {
    getSongBySearch,
    getSongByCategory,
    getAllAuthorsSongs,
} = require('../controllers/mainRouteControls');

router.post('/', getSongBySearch);
router.get('/category', getSongByCategory);
router.get('/author', getAllAuthorsSongs);

module.exports = router;
