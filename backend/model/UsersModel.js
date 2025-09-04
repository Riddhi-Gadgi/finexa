const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { UsersSchema } = require("../schemas/UsersSchema.js");

// Hash password before saving
UsersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
UsersSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const UsersModel = mongoose.model("User", UsersSchema);

module.exports = { UsersModel };
