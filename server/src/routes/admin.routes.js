const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");

router.get("/users", adminController.getUsers);
router.get("/stores", adminController.getStores);
router.get("/ratings", adminController.getRatings);

module.exports = router;