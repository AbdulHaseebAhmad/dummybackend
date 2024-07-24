import express from "express";

const app = express();

app.use(express.json());

app.listen(5001,()=> {
    console.log(`App is Running Smooth on ${5001}`)
})

app.get('/api/test', (request, response)=> {
    response.send("App is Running Smooth ")
})

