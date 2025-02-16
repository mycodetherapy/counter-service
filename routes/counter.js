const express = require("express");
const { incrementCounter, getCounter } = require("../controllers/counterController");

const router = express.Router();

router.post("/counter/:bookId/incr", incrementCounter);
router.get("/counter/:bookId", getCounter);

module.exports = router;
