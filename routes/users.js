const express = require("express");
const router = express.Router();

const Log = require("../logger");

/*
GET /users
*/
router.get("/", async (req, res) => {

  await Log(
    "backend",
    "info",
    "handler",
    "Fetching all users"
  );

  const users = [
    {
      id: 1,
      name: "Ramyaa"
    },
    {
      id: 2,
      name: "John"
    }
  ];

  res.status(200).json(users);
});

/*
GET /users/:id
*/
router.get("/:id", async (req, res) => {

  const userId = req.params.id;

  await Log(
    "backend",
    "info",
    "handler",
    `Fetching user with id ${userId}`
  );

  res.status(200).json({
    id: userId,
    name: "Ramyaa"
  });
});

/*
POST /users
*/
router.post("/", async (req, res) => {

  try {

    const { name } = req.body;

    if (!name) {

      await Log(
        "backend",
        "warn",
        "handler",
        "User creation failed because name was missing"
      );

      return res.status(400).json({
        success: false,
        message: "Name is required"
      });
    }

    await Log(
      "backend",
      "info",
      "handler",
      `New user created: ${name}`
    );

    res.status(201).json({
      success: true,
      message: "User created successfully"
    });

  } catch (error) {

    await Log(
      "backend",
      "error",
      "handler",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
});

/*
DELETE /users/:id
*/
router.delete("/:id", async (req, res) => {

  const userId = req.params.id;

  await Log(
    "backend",
    "info",
    "handler",
    `Deleting user ${userId}`
  );

  res.status(200).json({
    success: true,
    message: `User ${userId} deleted`
  });
});

module.exports = router;