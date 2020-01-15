const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({
        texto : "Ook"
    })
})

app.listen(3333)