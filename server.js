const express = require('express');
const path = require('path');
const app = express();

// Cấu hình thư mục chứa file HTML
app.use(express.static(path.join(__dirname, 'public')));

// Route để render file HTML khi truy cập vào trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
