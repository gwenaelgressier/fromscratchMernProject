const router = require("express").Router();
const authController = require("../controllers/auth.controller");

//sa va declencher la function signUP dans le dossier authController
router.post("/register", authController.signUp);

module.exports = router;
