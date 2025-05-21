const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');

router.post('/login', authCtrl.login);
router.post('/token', authCtrl.refreshToken);

module.exports = router;
