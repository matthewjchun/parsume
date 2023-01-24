const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    education: {
        type: mongoose.Schema.Types.Mixed,
        default: {},
        required: true,
    },
    experience: {
        type: mongoose.Schema.Types.Mixed,
        default: {},
        required: true,
    },
    skills: {
        type: mongoose.Schema.Types.Mixed,
        default: {},
        required: true,
    }
}, {
    timestamps: true,
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
