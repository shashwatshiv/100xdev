const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongo db intance credentials").then(() => {
  console.log("connected to db");
});
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = {
  Todo,
};
