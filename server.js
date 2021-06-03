const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to the MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

// API routes here
app.use(routes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});