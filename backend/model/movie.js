const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  // e model 
  director: {
    type: {
      name: {
        type: String,
        required: true,
      },
      phNumber: {
        type: String,
      },
    },
    required: false,
  },
  year: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Movies", MovieSchema);
