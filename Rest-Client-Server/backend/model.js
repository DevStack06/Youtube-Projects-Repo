const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Messgae = Schema(
  {
    msg: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Messgae", Messgae);
