const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    leads: { type: String, required: true },
    title: { type: String },
    country: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const MessageModel = mongoose.model("Messages", DataSchema);
module.exports = MessageModel;
