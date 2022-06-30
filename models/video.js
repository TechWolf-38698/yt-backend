const mongoose = require("mongoose");
const { Schema } = mongoose;

// Creating the schema
const VideoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  playlist: { type: Array, required: true },
  visibility: { type: String, required: true },
  videoURL: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  channelName: {type: String, required: true},
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("Video", VideoSchema);
User.createIndexes();
module.exports = User;
