// models/pasien.js

// Mengimpor modul mysql2 untuk koneksi ke database MySQL
const mysql = require("mysql2");

// Mengimpor konfigurasi database dari file config
const config = require("../config");

// Membuat koneksi ke database MySQL menggunakan konfigurasi yang diberikan
const connection = mysql.createConnection(config.db);

// Menyambung ke database dan menangani kemungkinan error
connection.connect((err) => {
	if (err) {
		// Menampilkan pesan error dan menghentikan proses jika gagal terhubung
		console.error("Error connecting to the database:", err);
		process.exit(1);
	}
	// Menampilkan pesan sukses jika koneksi berhasil
	console.log("Connected to the MySQL database.");
});

// Mengekspor koneksi untuk digunakan di file lain
module.exports = connection;
