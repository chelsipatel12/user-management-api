const express = require("express");
const router = express.Router();

// GET all users
router.get("/", (req, res) => {
  res.send("Get all users");
});

// POST create user
router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Name and Email required");
  }

  res.send("User created");
});

// PUT update user
router.put("/:id", (req, res) => {
  res.send("User updated");
});

// DELETE user
router.delete("/:id", (req, res) => {
  res.send("User deleted");
});

module.exports = router;