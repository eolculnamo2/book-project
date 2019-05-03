const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/login', (req,res) => {
  console.log(req.body.username);
  console.log(req.body.password);
});

module.exports = router;
