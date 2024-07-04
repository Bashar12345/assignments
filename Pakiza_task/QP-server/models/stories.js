const mongoose = require("mongoose");

// Define Story schema
const storySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  // Add more fields as needed
});

// Create Story model
const Story = mongoose.model("Story", storySchema);

module.exports = Story;
