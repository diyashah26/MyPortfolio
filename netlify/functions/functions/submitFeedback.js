const serverless = require("serverless-http");
const express = require("express");
const connectToDatabase = require("./db");
const Feedback = require("./feedbackModel");

const app = express();
app.use(express.json());

// POST Feedback Route
app.post("/feedback", async (req, res) => {
  await connectToDatabase();

  const { name, email, message } = req.body;

  try {
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();

    res.status(201).json({ success: true, message: "Feedback saved!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

module.exports.handler = serverless(app);
