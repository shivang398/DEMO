const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const leadRoutes = require('./routes/leadRoutes');
const courseRoutes = require('./routes/courseRoutes');
const aiRoutes = require('./routes/aiRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routing
app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Antigravity Coaching API' });
});

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in development mode on port ${PORT}`);
});
