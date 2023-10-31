const mongoose = require("mongoose");
const CreateSchema = new mongoose.Schema({
  Entercategory: {
    type: String,
  },
});
module.exports = mongoose.model("deep", CreateSchema);
