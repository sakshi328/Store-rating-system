const db = require("../config/db");

// GET ALL USERS
exports.getUsers = (req, res) => {
  db.query("SELECT id, name, email, role FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// GET ALL STORES
exports.getStores = (req, res) => {
  db.query("SELECT * FROM stores", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// GET ALL RATINGS
exports.getRatings = (req, res) => {
  db.query("SELECT * FROM ratings", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};