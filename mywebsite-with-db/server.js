const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    charset: 'utf8mb4'
});

db.connect((err) => {
    if (err) {
        console.error('数据库连接失败: ', err);
    } else {
        console.log('数据库连接成功');
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});