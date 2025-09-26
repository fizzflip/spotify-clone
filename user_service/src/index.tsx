import express from 'express'

const app = express()
const port = process.env.PORT || 5000;

app.get("/", (request, response) => {
    response.send("Server is working!")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})