// routes/pasienRoutes.js
const express = require("express");
const router = express.Router();
const pasienController = require("../controllers/pasienController");

router.get("/pasien", pasienController.getPasien);

module.exports = router;
