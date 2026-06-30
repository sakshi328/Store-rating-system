const express = require("express");
const router = express.Router();

const storeController = require("../controllers/store.controller");

// ADD STORE
router.post("/add", storeController.addStore);

// GET ALL STORES
router.get("/", storeController.getStores);

// ⭐ WITH RATING
router.get("/with-rating", storeController.getStoresWithRating);

module.exports = router;