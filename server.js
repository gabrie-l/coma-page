const express = require("express");
const path = require("path");
const morgan = require("morgan");

// Initialize the Express application
const app = express();

// Use morgan for logging HTTP requests
app.use(morgan("combined"));

// Serve static files with correct base path for both local and deployment paths
app.use("/coma-page/static", express.static(path.join(__dirname, "static")));

// Serve the index.html file for the base path of the deployment
app.use("/coma-page", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serve static files directly at the root level for local testing
app.use("/", express.static(path.join(__dirname)));

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
