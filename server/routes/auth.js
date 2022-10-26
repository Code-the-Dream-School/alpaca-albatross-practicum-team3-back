const express = require("express");
const router = express.Router();

const {register, login, deactivate} = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/deactivate", deactivate);

module.exports = router;
