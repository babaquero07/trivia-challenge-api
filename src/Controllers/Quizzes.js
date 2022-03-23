const quizzesRouter = require("express").Router();
const Quiz = require("../Models/Quiz");

quizzesRouter.post("/", async (req, res) => {
  console.log(req.body);
  const quiz = new Quiz(req.body);
  await quiz.save();

  res.status(201).json(quiz);
});

module.exports = quizzesRouter;
