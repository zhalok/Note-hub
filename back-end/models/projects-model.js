const mongoose = require("mongoose");

const project_schema = new mongoose.Schema({
  name: { type: String, required: true },
  semester: { type: String, required: true },
  type: { type: String, required: true },
  contributor_id: { type: String, required: true },
  contributor_name: { type: String, required: true },
});

module.exports = mongoose.model("Projects", project_schema);
