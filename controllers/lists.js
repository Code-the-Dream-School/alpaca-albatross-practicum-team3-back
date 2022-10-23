const ToDoList = require("../models/ToDoList");
const ToDo = require("../models/ToDo");
const {StatusCodes} = require("http-status-codes");
const {BadRequestError, NotFoundError} = require("../errors");

const getAllLists = async (req, res) => {
  const lists = await ToDoList.find({owner: req.user.userId}).sort("createdAt");
  res.status(StatusCodes.OK).json({lists, count: lists.length});
};

const getList = async (req, res) => {
  const {
    user: {userId},
    params: {id: listId},
  } = req;
  const list = await ToDoList.findOne({
    _id: listId,
    owner: userId,
  });
  if (!list)
    throw new NotFoundError(`No to-do list found with ID no. ${listId}`);
  res.status(StatusCodes.OK).json({list});
};

const createList = async (req, res) => {
  req.body.owner = req.user.userId;
  const list = await ToDoList.create(req.body);
  res.status(StatusCodes.CREATED).json({list});
};

const updateList = async (req, res) => {
  const {
    body: {title},
    user: {userId},
    params: {id: listId},
  } = req;
  if (title === "") throw new BadRequestError("title field cannot be empty");
  const list = await ToDoList.findOneAndUpdate(
    {_id: listId, owner: userId},
    req.body,
    {new: true, runValidators: true}
  );
  if (!list) throw new NotFoundError(`No list found with ID no. ${listId}`);
  res.status(StatusCodes.OK).json({list});
};

const deleteList = async (req, res) => {
  const {
    user: {userId},
    params: {id: listId},
  } = req;
  const list = await ToDoList.findOneAndDelete({
    _id: listId,
    owner: userId,
  });
  if (!list) throw new NotFoundError(`No list found with ID no. ${listId}`);
  const deletedTodos = await ToDo.deleteMany({
    list: listId,
    owner: userId,
  });
  res.status(StatusCodes.OK).json({
    msg: `List ID no. ${listId} and ${deletedTodos.deletedCount} to-do item(s) have been deleted`,
  });
};

module.exports = {
  getAllLists,
  getList,
  createList,
  updateList,
  deleteList,
};
