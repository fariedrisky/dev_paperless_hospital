// services/pasienService.js
const db = require("../models/pasien");

const getPasien = (filters, callback) => {
	// Base query with joins
	let query = [
		"SELECT",
		"p.no_rekam_medis,",
		"p.nama_pasien,",
		"d.nm_dokter,",
		"pp.ket_diagnosa,",
		"rp.tgl_registrasi,",
		"poli.nm_poli",
		"FROM pasien p",
		"JOIN registrasi_pasien rp ON rp.no_rekam_medis = p.no_rekam_medis",
		"JOIN dokter d ON d.id_poli = rp.id_poli_tujuan",
		"JOIN periksa_pasien pp ON pp.no_rekam_medis = p.no_rekam_medis AND pp.kd_dokter = d.kd_dokter",
		"JOIN poli ON poli.id_poli = d.id_poli",
		"WHERE 1=1",
	].join(" ");

	const params = [];

	if (filters.tgl_registrasi_start && filters.tgl_registrasi_end) {
		query += " AND rp.tgl_registrasi BETWEEN ? AND ?";
		params.push(filters.tgl_registrasi_start);
		params.push(filters.tgl_registrasi_end);
	}

	if (filters.nama_pasien) {
		query += " AND p.nama_pasien LIKE ?";
		params.push(`%${filters.nama_pasien}%`);
	}

	if (filters.nm_dokter) {
		query += " AND d.nm_dokter LIKE ?";
		params.push(`%${filters.nm_dokter}%`);
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
