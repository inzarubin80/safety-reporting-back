const express = require('express')
const app = express()
const port = 3000


const hardData = [{ user: 'a', duration: 1, role: 'user' }, { user: 'b', duration: 1, role: 'admin' }];


app.get('/users', function (req, res) {

  res.jsonp(hardData);

}
)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})