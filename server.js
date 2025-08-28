const express = require('express')
const app = express()
const PORT = process.env.PORT || 80

app.get("/sayhello", (req, res)=> {
    res.json({ message:"hello user" })
})

app.listen(PORT, ()=> {
    console.log(`server running on port: ${PORT}`)
})