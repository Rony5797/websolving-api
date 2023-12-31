const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true, versionKey: false }
);
const SubscribeModel = mongoose.model("Subscribes", DataSchema);
module.exports = SubscribeModel;
