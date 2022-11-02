const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please describe what's to be done."],
      minLength: 3,
      maxLength: 150,
      match: [/^.*(\S+).*$/, "A to do item cannot be all whitespaces."],
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
