import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB(); 

const app = express();

// ✅ Updated CORS settings
const allowedOrigins = [
  'http://localhost:3000',
  'https://nouman-naqbool-portfolio.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
