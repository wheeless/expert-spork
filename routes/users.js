var express = require('express');
var router = express.Router();

/* GET users listing. */
const auth = require('../controllers/auth');

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
