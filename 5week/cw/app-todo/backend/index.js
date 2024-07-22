const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.post("/todos", (req, res) => {
  const createPayload = req.body;
  console.log(createPayload);
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    console.log(parsedPayload);
    res.status(411).json({ msg: "wrong input" });
  } else {
    Todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    }).then(() => {
      res.json({ msg: "todo created" });
    });
  }
});
app.get("/todos", async (req, res) => {
  const todo = await Todo.find({});
  res.json({ todos: todo });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "you sent the wrong input" });
  }
  await Todo.updateOne(
    {
      _id: req.body.id,
    },
    { completed: true }
  );

  res.json({ msg: "todo marked as done" });
});

app.listen(3000, () => {
  console.log("server is running");
});
