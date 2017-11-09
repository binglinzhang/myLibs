const express = require('express')
const app = express()
app.use(express.static(require('path').join(__dirname,'public')))
const port = 9999
app.listen(port,() => {
    console.log('started@port:' + port)
})
