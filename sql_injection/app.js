require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const validator = require('validator');

const {HOST, USERNAME, PASSWORD, DATABASE} = process.env;

const app = express();

const mysqlCon = mysql.createConnection({
    host: HOST,
    user: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    multipleStatements: true
})

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send("Welcome");
})

app.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const q = mysqlCon.query(`SELECT * FROM user WHERE Email = '${email}' AND Password = '${password}'`, (error, result) => {
        if (result.length > 0) {
            // res.send(result[0]);
            // console.log(result[0])
            res.send(`<html><body>Welcome ${result[0].Email}</body></html>`);
        } else {
            res.send("Fail");
        }
    })
    console.log(q.sql);
})

app.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const q = mysqlCon.query(`INSERT INTO user (email, password) VALUES ('${email}', '${password}')`, (error, result) => {
        res.send('OK');
    })
    console.log(q.sql);
})

app.get('/user_profile', (req, res) => {
    const id = req.query.id;
    const q = mysqlCon.query('SELECT * FROM user WHERE id =' + id, (error, result) => {
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("Fail");
        }
    })
    console.log(q.sql);
})


/**
 * Safe Version (?)
 */

app.post('/signin_safe', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const q = mysqlCon.query('SELECT * FROM user WHERE Email = ? AND Password = ?', [email, password], (error, result) => {
        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.send("Fail");
        }
    })
    console.log(q.sql);
})

app.post('/signup_safe', (req, res) => {
    // if (!validator.isEmail(req.body.email)) {
    //     res.send('invalid email');
    //     return
    // }

    console.log(validator.escape(req.body.email))

    const email = encodeURIComponent(req.body.email);
    const password = encodeURIComponent(req.body.password);
    const q = mysqlCon.query(`INSERT INTO user (email, password) VALUES (?, ?)`, [email, password], (error, result) => {
        res.send('OK');
    })
    console.log(q.sql);
})


app.listen(7000, () => {
    console.log("Server start at port 7000")
})