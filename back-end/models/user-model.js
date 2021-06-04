const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  name: { type: String, required: true },
  session: { type: String, required: true },
  registration_id: { type: String, required: true },
  password: { type: String, required: true },
  books: [
    {
      name: { type: String, required: true },
      semester: { type: String, required: true },
    },
  ],

  notes: [
    {
      name: { type: String, required: true },
      semester: { type: String, required: true },
    },
  ],

  questions: [
    {
      name: { type: String, required: true },
      semester: { type: String, required: true },
    },
  ],

  projects: [
    {
      name: { type: String, required: true },
      semester: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("User", user_schema);
