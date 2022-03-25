const quizzesRouter = require("express").Router();
const Quiz = require("../Models/Quiz");
const Question = require("../Models/Question");

quizzesRouter.post("/", async (req, res) => {
  const { categoryName } = req.body;
  const category = await Category.findOne({ categoryName });
  category;
  if (category) {
    const quiz = await new Quiz({ categoryName }).save();

    category.quizzesID = category.quizzesID.concat(quiz._id);
    await category.save();

    return res.status(201).json(quiz);
  }

  return res.status(404).json({ error: "Category not found" });
});

quizzesRouter.get("/", async (req, res) => {
  const questions = await Question.find({});
  questions.length > 0
    ? res.status(302).json({ questions: questions.length, results: questions })
    : res.status(404).json({ error: "The are not questions" });
});

quizzesRouter.get("/:category", async (req, res) => {
  const { category } = req.params;
  category.toLowerCase().replace(/\s+/g, "");
  const questions = await Question.find({ category });

  questions.length > 0
    ? res
        .status(302)
        .json({ questions: questions.length, category, results: questions })
    : res.status(404).json({ error: "The are not questions" });
});

module.exports = quizzesRouter;
