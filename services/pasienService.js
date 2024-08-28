// services/pasienService.js
const db = require("../models/pasien");

const getPasien = (filters, callback) => {
	let query = "SELECT * FROM pasien";
	const params = [];

	if (Object.keys(filters).length > 0) {
		const filterClauses = [];
		for (const [key, value] of Object.entries(filters)) {
			filterClauses.push(`${key} = ?`);
			params.push(value);
		}
		query += ` WHERE ${filterClauses.join(" AND ")}`;
	}

	db.query(query, params, (err, results) => {
		if (err) {
			return callback(err);
		}
		callback(null, results);
	});
};

module.exports = {
	getPasien,
};
