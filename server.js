const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cryptoRoutes = require('./routes/cryptoRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());

const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
app.use(
  cors({
    origin: clientUrl,
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'Coinbase clone backend is running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/crypto', cryptoRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ success: false, error: err.message || 'Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
