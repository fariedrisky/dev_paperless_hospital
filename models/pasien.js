// models/pasien.js
const mysql = require("mysql2");
const config = require("../config");

// Membuat koneksi ke database
const connection = mysql.createConnection(config.db);

connection.connect((err) => {
	if (err) {
		console.error("Error connecting to the database:", err);
		process.exit(1);
	}
	console.log("Connected to the MySQL database.");
});

module.exports = connection;
