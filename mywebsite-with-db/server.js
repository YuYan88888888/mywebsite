const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 创建 MySQL 连接
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // 替换为你的 MySQL 用户名
    password: '12345677', // 替换为你的 MySQL 密码
    database: 'mywebsite'
});

// 连接数据库
db.connect((err) => {
    if (err) {
        console.error('数据库连接失败: ', err);
    } else {
        console.log('数据库连接成功');
    }
});

// 使用 body-parser 解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 提供静态文件
app.use(express.static('public'));

// 处理表单提交
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error('插入数据失败: ', err);
            res.status(500).send('服务器错误');
        } else {
            console.log('数据插入成功');
            res.send('数据提交成功！');
        }
    });
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});