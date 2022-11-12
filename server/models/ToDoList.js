const mongoose = require("mongoose");

const ToDoListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for the to-do list."],
      minLength: 3,
      maxLength: 50,
      match: [/^.*(\S+).*$/, "A to do list cannot be all white spaces."],
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide to-do list owner info."],
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("ToDoList", ToDoListSchema);
