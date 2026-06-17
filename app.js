const express = require("express");

const Log = require("./logger");
const userRoutes = require("./routes/users");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

/*
Request Logging Middleware
*/
app.use(async (req, res, next) => {

  await Log(
    "backend",
    "info",
    "middleware",
    `${req.method} ${req.originalUrl} request received`
  );

  next();
});

/*
User Routes
*/
app.use("/users", userRoutes);

/*
Health Check
*/
app.get("/", async (req, res) => {

  await Log(
    "backend",
    "info",
    "route",
    "Health endpoint accessed"
  );

  res.json({
    success: true,
    message: "Server Running"
  });
});

/*
404 Route
*/
app.use(async (req, res) => {

  await Log(
    "backend",
    "warn",
    "route",
    `Route not found: ${req.originalUrl}`
  );

  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

/*
Global Error Handler
*/
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, async () => {

  await Log(
    "backend",
    "info",
    "handler",
    `Server started on port ${PORT}`
  );

  console.log(`Server running on port ${PORT}`);
});