
const express = require('express');
const greeting = require('./greeting');

const app = express()
const port = 3000

console.log(greeting.getMessage('Иван'));

const hardData = [{ user: 'a', duration: 1, role: 'user' }, { user: 'b', duration: 1, role: 'admin' }];

//new csvReader('./data/inputData.csv');

app.get('/users', function (req, res) {
  res.jsonp(hardData);
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})