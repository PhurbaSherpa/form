const router = require("express").Router();
const axios = require("axios");
module.exports = router;

router.post("/submit", async (req, res, next) => {
  try {
    res.send("hellO");
  } catch (error) {
    next(error);
  }
});
