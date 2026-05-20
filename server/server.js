const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config');
const { Submission, SystemControl } = require('./models');

const app = express();
app.set('trust proxy', true);
app.use(cors());
app.use(express.json());

connectDB();

// Middleware: US Server Tracing
app.use((req, res, next) => {
    const clientIp = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.ip;
    console.log(`[TRACE] Request from IP: ${clientIp}`);
    next();
});

// API: Send .env links to the frontend
app.get('/api/contact-links', (req, res) => {
    res.json({
        whatsapp: process.env.WHATSAPP_LINK || '#',
        telegram: process.env.TELEGRAM_LINK || '#'
    });
});

// API: Handle Form Submissions
app.post('/api/submit', async (req, res) => {
    try {
        const submissionControl = await SystemControl.findOne({ featureName: 'allow_submissions' });
        if (submissionControl && !submissionControl.isEnabled) {
            return res.status(403).json({ success: false, message: "Submissions are currently locked." });
        }

        const { name, category, message } = req.body;
        const traceData = req.headers['cf-connecting-ip'] || req.ip;

        const newSubmission = new Submission({ name, category, message, tracing: traceData });
        await newSubmission.save();
        
        res.status(201).json({ success: true, message: 'Data securely logged.' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Infrastructure active on port ${PORT}`));
