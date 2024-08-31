// controllers/pasienController.js

// Mengimpor service pasien untuk digunakan di controller
const pasienService = require("../services/pasienService");

// Controller untuk menangani request GET pada endpoint /pasien
const getPasien = (req, res) => {
	// Mendapatkan filter dari query string di request
	const filters = req.query;

	// Memanggil service getPasien dengan filter yang diterima dari request
	pasienService.getPasien(filters, (err, results) => {
		if (err) {
			// Jika terjadi error, mengirimkan response dengan status 500 dan pesan error
			return res
				.status(500)
				.json({ error: "Terjadi kesalahan pada server." });
		}
		// Mengirimkan hasil query dalam format JSON
		res.json(results);
	});
};

// Mengekspor controller getPasien untuk digunakan di route
module.exports = {
	getPasien,
};
