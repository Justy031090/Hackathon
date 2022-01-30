const express = require('express');
const router = express.Router();
const {
    getSongBySearch,
    getSongByCategory,
} = require('../controllers/mainRouteControls');

router.post('/', getSongBySearch);
router.get('category', getSongByCategory);

module.exports = router;
