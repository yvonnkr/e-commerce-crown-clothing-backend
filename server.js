const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "server" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, error => {
  if (error) throw error;
  console.log(`Server up on port ${PORT}`);
});
