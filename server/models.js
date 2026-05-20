const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
    name: { type: String, default: 'Anonymous' },
    category: { type: String, required: true },
    message: { type: String, required: true },
    tracing: { type: String }, // Stores US Proxy Trace IP
    isApproved: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const SystemControlSchema = new mongoose.Schema({
    featureName: { type: String, required: true, unique: true },
    isEnabled: { type: Boolean, default: true },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = {
    Submission: mongoose.model('Submission', SubmissionSchema),
    SystemControl: mongoose.model('SystemControl', SystemControlSchema)
};
