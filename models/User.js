const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
