require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2/promise');
const {DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE} = process.env;

const mysqlEnv = {
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE
}
console.log("Env:", mysqlEnv)
const pool = mysql.createPool(mysqlEnv);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("hello")
})

app.get('/users', async (req, res) => {
  const user_id = req.params.id;
  const [user] = await pool.query('SELECT * FROM user', [user_id]);
  console.log("User:", user)
  res.send(user)
})

app.post('/users', async (req, res) => {
  const body = req.body;
  await pool.query('INSERT INTO user (name, email, password) VALUES (?, ?, ?);', [body.name, body.email, body.password]);
  res.send("OK")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

