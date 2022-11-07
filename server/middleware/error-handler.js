const {StatusCodes} = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    //set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong. Try again later.",
  };

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field. Please choose another value.`;
    customError.statusCode = 400;
  }

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((error) => error.message)
      .join("; ");
    customError.statusCode = 400;
  }

  if (err.name === "CastError") {
    customError.msg = `No entry found with ID no. ${err.value}.`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({msg: customError.msg});
};

module.exports = errorHandlerMiddleware;
