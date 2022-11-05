const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please describe what's to be done."],
      maxLength: 150,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide to-do owner info."],
    },
    list: {
      type: mongoose.Types.ObjectId,
      ref: "ToDoList",
      required: [true, "Please specify the list this item belongs to."],
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("ToDo", ToDoSchema);
