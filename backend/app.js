const express = require('express');
const cors = require('cors');
require('dotenv').config();
const reportRoutes = require('./routes/reportRoutes');

const app = express();

// Bật CORS để cho phép Frontend (HTML/JS phẳng) gọi API
app.use(cors());
app.use(express.json());

// Khai báo định tuyến (Routes)
app.use('/api', reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend đang chạy tại: http://localhost:${PORT}`);
});