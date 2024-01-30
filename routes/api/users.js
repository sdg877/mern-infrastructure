const express = require ('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const { login } = require('../../controllers/api/users')


router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

router.post('/', usersCtrl.create);
router.post('/login', login)

module.exports = router;