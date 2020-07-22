const router = require('express').Router();

const signup = require('./signUp');

router.get('/register', signup);



module.exports = router;