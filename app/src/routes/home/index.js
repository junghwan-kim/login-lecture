'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl')

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login); //로그인페이지
router.get('/register', ctrl.output.register); //회원가입페이지

router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register); //회원가입페이지

module.exports = router;