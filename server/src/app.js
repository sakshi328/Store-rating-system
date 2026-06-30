const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
const authRoutes = require("./routes/auth.routes");
const storeRoutes = require("./routes/store.routes");
const adminRoutes = require("./routes/admin.routes");
const ratingRoutes = require("./routes/rating.routes");

app.use("/api/ratings", ratingRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/admin", adminRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

module.exports = app;