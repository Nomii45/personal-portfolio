import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB(); 
const app = express();
// app.use(cors());
app.use(cors({
  origin: 'https://your-vercel-site.vercel.app'
}));

app.use(express.json());

app.use('/api/contact', contactRoutes);

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5001');
});
