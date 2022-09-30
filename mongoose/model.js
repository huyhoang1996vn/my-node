const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let employee = new Schema(
    {
        name: {
        type: String
        },
        age: {
        type: Number
        },
        location: {
        type: String
        }
    },
    { collection: "employees" }
);

module.exports = mongoose.model("employees", employee);