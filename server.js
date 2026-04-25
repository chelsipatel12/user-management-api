const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes");

// Use routes
app.use("/users", userRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});