const router = require("express").Router();
const axios = require("axios");
const { Choices } = require("../db/models");
module.exports = router;

router.post("/submit", async (req, res, next) => {
  try {
    let choices = req.body;
    await Choices.create({
      choice1: choices.choice1,
      choice2: choices.choice2,
      choice3: choices.choice3,
    });
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});
