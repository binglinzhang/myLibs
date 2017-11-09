const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '.')))

const port = 8888
app.listen(port, () => {
    console.log('server started@' + port)
})
