// controllers/pasienController.js
const pasienService = require("../services/pasienService");

const getPasien = (req, res) => {
	const filters = req.query;

	pasienService.getPasien(filters, (err, results) => {
		if (err) {
			return res
				.status(500)
				.json({ error: "Terjadi kesalahan pada server." });
		}
		res.json(results);
	});
};

module.exports = {
	getPasien,
};
