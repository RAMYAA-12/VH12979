const Log = require("../logger");

const errorHandler = async (err, req, res, next) => {

  await Log(
    "backend",
    "fatal",
    "handler",
    `Unhandled Exception: ${err.message}`
  );

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
};

module.exports = errorHandler;