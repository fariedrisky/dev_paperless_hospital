// app.js

// Mengimpor modul Express untuk membuat aplikasi web
const express = require("express");

// Membuat instance aplikasi Express
const app = express();

// Mengimpor routing pasien dari file routes/pasien
const pasienRoutes = require("./routes/pasien");

// Mendefinisikan port di mana server akan berjalan
const port = 3000;

// Middleware untuk parsing body request dengan format JSON
// Ini memungkinkan aplikasi untuk memproses data JSON yang dikirim dalam permintaan HTTP
app.use(express.json());

// Menggunakan routing pasien pada path '/api'
// Semua endpoint yang didefinisikan dalam pasienRoutes akan diakses melalui '/api'
app.use("/api", pasienRoutes);

// Memulai server dan mendengarkan pada port yang telah ditentukan
// Menampilkan pesan di konsol saat server berhasil dijalankan
app.listen(port, () => {
	console.log(`Server berjalan di http://localhost:${port}`);
});
