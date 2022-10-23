const mongoose = require("mongoose");

const ToDoListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for the to-do list."],
      maxLength: 50,
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
