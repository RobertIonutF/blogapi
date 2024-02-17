/**
 * @file User model for the blog API.
 * @module User
 * @requires mongoose
 * @requires bcrypt
 */

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

/**
 * User Schema
 * @typedef {Object} UserSchema
 * @property {string} username - The username of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 */
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

/**
 * Middleware function that hashes the password before saving the user.
 * @function
 * @name preSave
 * @memberof module:User
 * @param {Function} next - The next function to be called.
 */

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

module.exports = mongoose.model("User", userSchema);
