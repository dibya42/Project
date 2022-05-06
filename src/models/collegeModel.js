const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        trim: true,
        required: "College Name  is Required",
    },
    fullName: {
        type: String,
        trim: true,
        required: "College's FullName is Required",

    },
    logoLink: {
        type: String,
        trim: true,
        required: "Logo is Required",
    },

    isDeleted: {
        type: Boolean,
        default: false,
    }


}, { timestamps: true })

module.exports = mongoose.model("College", collegeSchema);
