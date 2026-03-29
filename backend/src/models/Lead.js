const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    courseInterest: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    message: { type: String },
    status: { type: String, enum: ['new', 'contacted', 'converted', 'closed'], default: 'new' }
}, { timestamps: true });

const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;
