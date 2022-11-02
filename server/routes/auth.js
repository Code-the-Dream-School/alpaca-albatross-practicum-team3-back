const express = require("express");
const router = express.Router();

const {register, login, closeAccount} = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/close", closeAccount);

module.exports = router;
