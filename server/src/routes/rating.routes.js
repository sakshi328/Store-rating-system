const express = require("express");
const router = express.Router();

const ratingController = require("../controllers/rating.controller");
const { verifyToken } = require("../middleware/auth.middleware");

// ONLY LOGGED IN USERS CAN RATE
router.post("/rate", verifyToken, ratingController.addRating);

module.exports = router;