// src/controllers/rating.controller.js

const db = require("../config/db");

exports.addRating = (req, res) => {
  const { user_id, store_id, rating } = req.body;

  const sql =
    "INSERT INTO ratings (user_id, store_id, rating) VALUES (?, ?, ?)";

  db.query(sql, [user_id, store_id, rating], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Rating submitted" });
  });
};