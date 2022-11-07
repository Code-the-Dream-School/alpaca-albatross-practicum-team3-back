const ToDoList = require("../models/ToDoList");
const ToDo = require("../models/ToDo");
const {StatusCodes} = require("http-status-codes");
const {BadRequestError, NotFoundError} = require("../errors");

const getTodos = async (req, res) => {
  const {
    user: {userId},
    query: {list: listId},
  } = req;
  const todos = await ToDo.find({
    owner: userId,
    list: listId,
  }).sort("createdAt");
  res.status(StatusCodes.OK).json({todos, count: todos.length});
};

const getTodo = async (req, res) => {
  const {
    user: {userId},
    params: {id: todoId},
  } = req;
  const todo = await ToDo.findOne({
    _id: todoId,
    owner: userId,
  });
  if (!todo)
    throw new NotFoundError("No todo item is found that matches your request.");
  res.status(StatusCodes.OK).json({todo});
};

const createTodo = async (req, res) => {
  req.body.owner = req.user.userId;
  const listId = req.body.list;
  // request body must include {list: listId}
  if (listId === "") throw new BadRequestError("List field cannot be empty.");
  const list = await ToDoList.findById(listId);
  if (!list)
    throw new NotFoundError("No todo list is found that matches your request.");

  const todo = await ToDo.create(req.body);
  res.status(StatusCodes.CREATED).json({todo});
};

const updateTodo = async (req, res) => {
  const {
    body: {title},
    user: {userId},
    params: {id: todoId},
  } = req;
  if (title === "") throw new BadRequestError("Title field cannot be empty.");
  const todo = await ToDo.findOneAndUpdate(
    {_id: todoId, owner: userId},
    req.body,
    {new: true, runValidators: true}
  );
  if (!todo)
    throw new NotFoundError("No todo item is found that matches your request.");
  res.status(StatusCodes.OK).json({todo});
};

const deleteTodo = async (req, res) => {
  const {
    user: {userId},
    params: {id: todoId},
  } = req;
  const todo = await ToDo.findOneAndDelete({
    _id: todoId,
    owner: userId,
  });
  if (!todo)
    throw new NotFoundError("No todo item is found that matches your request.");
  res.status(StatusCodes.OK).json({msg: "The todo item has been deleted."});
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
