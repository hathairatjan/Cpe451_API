const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  password: { type: String, required: true },
  birthdate: { type: String, required: true },
  created_at: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("user", user_schema);
