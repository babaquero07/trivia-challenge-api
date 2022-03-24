const questionsRouter = require("express").Router();
const Question = require("../Models/Question");
const Quiz = require("../Models/Quiz");

questionsRouter.post("/", async (req, res) => {
  const { question } = req.body;
  const foundQuestion = await Question.findOne({ question });
  if (!foundQuestion) {
    const question = await new Question(req.body).save();
    return res.status(201).json(question);
  }
  // console.log(category.questionsID);
  // category.questionsID = category.questionsID.concat(question._id);
  // await category.save();
  return res
    .status(400)
    .json({ error: "The question already exists in the database" });
});

questionsRouter.get("/", async (req, res) => {
  const questions = await Question.find({});
  return res.json(questions);
});

questionsRouter.get("/:category", async (req, res) => {
  const { category } = req.params;
  //Elimino espacios y convierto en minusculas
  category.toLowerCase().replace(/\s+/g, "");
  const questions = await Question.find({ category });

  questions.length > 0
    ? res.json({ totalQuestions: questions.length, category, quiz: questions })
    : res.status(404).json({ error: "The are not questions" });
});

questionsRouter.put("/", async (req, res) => {
  const { questionID, ...newQuestionInfo } = req.body;

  const question = {
    ...newQuestionInfo,
  };

  const updatedQuestion = await Question.findByIdAndUpdate(
    questionID,
    question,
    {
      new: true,
    }
  );
  return res.json(updatedQuestion);
});

questionsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedQuestion = await Question.findByIdAndDelete(id);
  deletedQuestion
    ? res.json({ msg: "Question deleted successfully" })
    : res.status(404).json({ error: "Question not found" });
});

module.exports = questionsRouter;
