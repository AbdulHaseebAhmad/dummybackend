import express from "express";

const app = express();

app.use(express.json());


app.get('/api/test', (request, response)=> {
    response.send("App is Running Smooth ")
})

app.listen(5001,()=> {
    console.log(`App is Running Smooth on ${5001}`)
})
