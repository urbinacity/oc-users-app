const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/auth_controller');

router.post('/register', signup);
router.post('/login', login);

module.exports = router;
