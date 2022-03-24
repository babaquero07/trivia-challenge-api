const { Schema, model } = require("mongoose");

const quizSchema = new Schema({
  results: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});

quizSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = model("Quiz", quizSchema);
