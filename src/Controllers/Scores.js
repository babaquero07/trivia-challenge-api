const scoresRouter = require("express").Router();
const Score = require("../Models/Score");

scoresRouter.post("/", async (req, res) => {
  const { quiz, email, ...newScore } = req.body;
  const { category } = quiz;
  const user = await Score.find({ email });
  if (!user) {
    const score = await new Score({
      email,
      newScore,
      quizCategory: category,
    }).save();
    res.status(201).json(score);
  } else {
    const score = await new Score({
      ...newScore,
      // email,
      quizCategory: category,
    }).save();
    return res.status(201).json(score);
  }
  return res.status(404).json({ err: "Score not found" });
});

scoresRouter.get("/", async (req, res) => {
  const scores = await Score.find({});
  scores.length > 0
    ? res.json(scores)
    : res.status(404).json({ error: "The are not scores in the DB" });
});

scoresRouter.put("/", async (req, res) => {
  const { scoreID, email, ...newScoreInfo } = req.body;

  const userScores = await Score.find({ email });
  console.log(userScores);
  if (!userScores) {
    const score = {
      email,
      ...newScoreInfo,
    };

    const updatedScore = await Score.findByIdAndUpdate(scoreID, score, {
      new: true,
    });

    if (updatedScore)
      return res.json({
        newScore: updatedScore,
        msg: "Score updated sucessfully!",
      });
  } else {
    const score = {
      email,
      ...newScoreInfo,
    };

    const updatedScore = await Score.findByIdAndUpdate(scoreID, score, {
      new: true,
    });
    if (updatedScore)
      return res.json({
        newScore: updatedScore,
        msg: "Score updated sucessfully!",
      });
  }

  return res.status(404).json({ err: "Score not found. Check the ID" });
});

scoresRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedScore = await Score.findByIdAndDelete(id);
  deletedScore
    ? res.json({ msg: "Score deleted successfully" })
    : res.status(404).json({ error: "Score not found. Check the ID" });
});

module.exports = scoresRouter;
