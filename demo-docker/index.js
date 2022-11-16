const express = require("express")

const app = express()

app.get('', (req,res)=> {
    res.end("Hello from docker ")
})

app.listen(80)

