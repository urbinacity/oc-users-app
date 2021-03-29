const express = require('express');
const router = express.Router();
const { deleteUser, getUserById, getUsers, updateUser } = require('../controllers/user_controller');
const { isAuthenticated } = require('../middlewares/auth_middleware');

/* GET users listing. */

router.use(isAuthenticated);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
