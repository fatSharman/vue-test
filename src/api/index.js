const express = require('express')
const app = express()
app.listen(80, () => console.log('服务启动'))

app.get('/', (req, res) => { res.json('hello world') })
