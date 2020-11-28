var mongoose = require("mongoose");
var registersSchema = new mongoose.Schema({
    studentid: Number,
    studentname: String,
    studentcountry: String,
    studentstate: String,
    studentdistrict: String,
    studentmandal: String,
    studentvillage: String,
    studentdob: String,
});

mongoose.model("data", registersSchema);
