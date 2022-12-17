
const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String
  },
  country: {
    type: String
  },
  birthday: {
    type: Date
  },
  company: {
    type: String
  },
  marital_status: {
    type: String
  }
});

const person = mongoose.model("persons", personSchema);
module.exports = person;