//import libraries
const {createUser,readUser, updateUser, deleteUser}= require("./user.controller");
const router = require('express').Router();

router.post('/',createUser);
router.get('/',readUser);
router.put('/',updateUser);
router.delete('/',deleteUser);
module.exports = router;


