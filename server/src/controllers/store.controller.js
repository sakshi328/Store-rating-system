const db = require("../config/db");

// ADD STORE
exports.addStore = (req, res) => {
  const { name, email, address, owner_id } = req.body;

  const sql =
    "INSERT INTO stores (name, email, address, owner_id) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, address, owner_id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Store added successfully" });
  });
};

// GET ALL STORES
exports.getStores = (req, res) => {
  const sql = "SELECT * FROM stores";

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

// ⭐ GET STORES WITH AVERAGE RATING (IMPORTANT FIX)
exports.getStoresWithRating = (req, res) => {
  const sql = `
    SELECT 
      s.id,
      s.name,
      s.email,
      s.address,
      IFNULL(AVG(r.rating), 0) AS average_rating
    FROM stores s
    LEFT JOIN ratings r ON s.id = r.store_id
    GROUP BY s.id
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};