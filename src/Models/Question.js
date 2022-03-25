const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  // question: {
  //   type: String,
  //   required: true,
  // },
  // options: [
  //   {
  //     answer: {
  //       type: String,
  //       required: true,
  //     },
  //     isCorrect: {
  //       type: Boolean,
  //       required: true,
  //     },
  //     answer: {
  //       type: String,
  //       required: true,
  //     },
  //     isCorrect: {
  //       type: Boolean,
  //       required: true,
  //     },
  //   },
  // ],
  // categoryID: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Category",
  // },
  // quizID: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Quiz",
  // },
  category: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      answer: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      },
      answer2: {
        type: String,
        required: true,
      },
      isCorrect2: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

questionSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = model("Question", questionSchema);
