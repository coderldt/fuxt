const express = require('express')
const cors = require('cors')
const app = express()
const port = 3009

app.use(cors())
app.post('/test', (req, res) => {
  console.log('12312312312');
  // setTimeout(() => {
  // }, 2000)
  res.send({ msg: '123,456' })
})

app.listen(port, (err) => {
  console.log(err);
  console.log(`Example app listening on port ${port}`)
})