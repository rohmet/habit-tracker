const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// -- Middleware --
// izinkan cors
const corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));

// baca json body pada request
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Selamat datang di Habit Tracker API!" });
});

// (Nantinya kita akan pindahkan rute ke folder src/routes)

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server backend berjalan di http://localhost:${PORT}`);
});
