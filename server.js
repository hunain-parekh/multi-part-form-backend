const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

// MongoDB Connect
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('Mongo Error:', err));

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
