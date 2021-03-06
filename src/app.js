const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("express-async-errors");
const cors = require("cors");
const { PORT, MONGODB_URI } = require("./Utils/config");
const logger = require("./Utils/logger");
// const middleware = require("./utils/middleware");
const quizzesRouter = require("./Controllers/Quizzes");
const questionsRouter = require("./Controllers/Questions");
const scoresRouter = require("./Controllers/Scores");

const app = express();

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.set("port", PORT);

app.use("/api/questions", questionsRouter);
app.use("/api/quizzes", quizzesRouter);
app.use("/api/scores", scoresRouter);

// app.use(middleware.unknownEndpoint);
// app.use(middleware.errorHandler);

module.exports = app;
