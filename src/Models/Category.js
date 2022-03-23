const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  QuizzesID: [
    {
      type: Schema.Types.ObjectId,
      ref: "Quiz",
    },
  ],
});

categorySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

module.exports = model("Category", categorySchema);
