const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., "Morning Batch A"
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    instructor: { type: String },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    schedule: { type: String } // e.g., "Mon-Wed-Fri 10:00 AM"
}, { timestamps: true });

const Batch = mongoose.model('Batch', batchSchema);
module.exports = Batch;
