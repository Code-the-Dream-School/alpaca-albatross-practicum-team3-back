const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username."],
    minLength: 6,
    maxLength: 18,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    match: [
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@$%&?]).{8,32}$/,
      "Invalid password. Must have at least one lowercase character, one uppercase character, one digit and one special character (!@$%&?).",
    ],
    minLength: 8,
    maxLength: 32,
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    {
      userId: this._id,
      username: this.username,
    },
    process.env.JWT_SECRET,
    {expiresIn: process.env.JWT_EXPIRY}
  );
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
