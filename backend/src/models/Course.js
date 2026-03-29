const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true }, // e.g., '6 Months'
    fee: { type: Number, required: true },
    instructor: { type: String },
    syllabus: [{ type: String }],
    thumbnail: { type: String } // URL from Cloudinary
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
