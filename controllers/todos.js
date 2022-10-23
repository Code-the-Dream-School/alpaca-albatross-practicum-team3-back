const ToDo = require("../models/ToDo");
const ToDoList = require("../models/ToDoList");
const {StatusCodes} = require("http-status-codes");
const {BadRequestError, NotFoundError} = require("../errors");

const getAllTodos = async (req, res) => {
  const todos = await ToDo.find({owner: req.user.userId}).sort("createdAt");
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
  if (!todo) throw new NotFoundError(`No to do found with ID no. ${todoId}`);
  res.status(StatusCodes.OK).json({todo});
};

const createTodo = async (req, res) => {
  req.body.owner = req.user.userId;
  // request body must include {list: listId}
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
  if (!todo) throw new NotFoundError(`No to do found with ID no. ${todoId}.`);
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
  if (!todo) throw new NotFoundError(`No to do found with ID no. ${todoId}.`);
  res
    .status(StatusCodes.OK)
    .json({msg: `To do ID no. ${todoId} has been deleted.`});
};

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
