const express = require('express');
const router = express.Router();
const path = require('path');
const { layoutRoutes } = require('./routes/routes');

router.get(layoutRoutes, (req,res) => res.sendFile(path.join(__dirname,'..','/public/index.html')));

module.exports = router;
