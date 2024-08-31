// services/pasienService.js

// Mengimpor koneksi database dari file models/pasien
const db = require("../models/pasien");

// Fungsi untuk mengambil data pasien berdasarkan filter yang diberikan
const getPasien = (filters, callback) => {
	// Menyusun query dasar dengan JOIN untuk menggabungkan tabel-tabel terkait
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
		"WHERE 1=1", // Kondisi yang selalu benar untuk memudahkan penambahan filter
	].join(" ");

	// Array untuk menyimpan parameter yang digunakan dalam query
	const params = [];

	// Menambahkan filter untuk tanggal registrasi jika diberikan
	if (filters.tgl_registrasi_start && filters.tgl_registrasi_end) {
		query += " AND rp.tgl_registrasi BETWEEN ? AND ?";
		params.push(filters.tgl_registrasi_start);
		params.push(filters.tgl_registrasi_end);
	}

	// Menambahkan filter untuk no rekam medis jika diberikan
	if (filters.no_rekam_medis) {
		query += " AND p.no_rekam_medis LIKE ?";
		params.push(`%${filters.no_rekam_medis}%`);
	}

	// Menambahkan filter untuk nama pasien jika diberikan
	if (filters.nama_pasien) {
		query += " AND p.nama_pasien LIKE ?";
		params.push(`%${filters.nama_pasien}%`);
	}

	// Menambahkan filter untuk nama dokter jika diberikan
	if (filters.nm_dokter) {
		query += " AND d.nm_dokter LIKE ?";
		params.push(`%${filters.nm_dokter}%`);
	}

	// Menjalankan query dengan parameter yang telah ditentukan
	db.query(query, params, (err, results) => {
		if (err) {
			// Mengembalikan error jika terjadi kesalahan saat menjalankan query
			return callback(err);
		}
		// Mengembalikan hasil query jika berhasil
		callback(null, results);
	});
};

// Mengekspor fungsi getPasien untuk digunakan di file lain
module.exports = {
	getPasien,
};
