import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // ✅ Import cors
import contactRoutes from './routes/contactRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS for your frontend domain
app.use(cors({
  origin: 'https://nouman-naqbool-portfolio.vercel.app',
  methods: ['POST', 'GET'],
  credentials: true
}));

app.use(express.json());

app.use('/api/contact', contactRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});
