// app.js
const express = require("express");
const app = express();
const pasienRoutes = require("./routes/pasien");
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Rute API
app.use("/api", pasienRoutes);

// Mulai server
app.listen(port, () => {
	console.log(`Server berjalan di http://localhost:${port}`);
});
