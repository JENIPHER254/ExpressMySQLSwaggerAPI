//import libraries
const {createUser,readUser, updateUser}= require("./user.controller");
const router = require('express').Router();

router.post('/',createUser);
router.get('/',readUser);
router.patch('/',updateUser);

module.exports = router;


