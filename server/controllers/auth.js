const User = require("../models/User");
const ToDoList = require("../models/ToDoList");
const ToDo = require("../models/ToDo");
const {StatusCodes} = require("http-status-codes");
const {BadRequestError, UnauthenticatedError} = require("../errors");

const checkUsernameAndPassword = async () => {
  const {username, password} = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide username and password.");
  }
  const user = await User.findOne({username});
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials. Please try again.");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid credentials. Please try again.");
  }
};

const register = async (req, res) => {
  const user = await User.create({...req.body});
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({user: {username: user.username}, token});
};

const login = async (req, res) => {
  await checkUsernameAndPassword();

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({user: {username: user.username}, token});
};

const closeAccount = async (req, res) => {
  await checkUsernameAndPassword();

  const deletedTodos = await ToDo.deleteMany({owner: user._id});
  const deletedLists = await ToDoList.deleteMany({owner: user._id});
  await user.remove();
  res.status(StatusCodes.OK).json({
    msg: `User ${username} and ${deletedLists.deletedCount} to-do list(s) and ${deletedTodos.deletedCount} to-do item(s) have been deleted`,
  });
};

module.exports = {
  register,
  login,
  closeAccount,
};
