const express = require('express')

const app = express();

// Middleware
app.use(express.json())

// Routing
app.get('/', (req,res) => {res.sendStatus(200)})
app.post('/', (req,res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(5000, () => console.log("Server listening on port 5000"))