const express = require('express');
const router = express.Router();
const { getSongBySearch } = require('../controllers/mainRouteControls');

router.post('/', getSongBySearch);

module.exports = router;
