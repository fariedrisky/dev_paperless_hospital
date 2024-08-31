// routes/pasienRoutes.js

// Mengimpor modul Express untuk routing
const express = require("express");

// Membuat instance router dari Express
const router = express.Router();

// Mengimpor controller pasien yang berisi logika untuk menangani request
const pasienController = require("../controllers/pasienController");

// Mendefinisikan route GET untuk endpoint /pasien
// Menghubungkan route ini dengan metode getPasien dari pasienController
router.get("/pasien", pasienController.getPasien);

// Mengekspor router agar bisa digunakan di file lain, seperti di app.js atau server.js
module.exports = router;
