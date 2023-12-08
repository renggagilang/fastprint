module.exports = (err, req, res, next) => {
  let message = "Internal Server Error";
  let status = 500;

  switch (err.name) {
    case "NotFound":
      status = 404;
      message = "Data not found";
      break;
    default:
      break;
    case "SequelizeValidationError":
      status = 400;
      message = err.errors;
      break;
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = err.message;
      break;
  }

  res.status(status).json({ message: message });
};
