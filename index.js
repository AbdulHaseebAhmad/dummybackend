import express from "express";
import dotenv from "dotenv"
dotenv.config()
const app = express();
app.get('/api/test', (request, response)=> {
    response.send("App is Running Smooth ")
})
app.use(express.json());

const PORT = process.env.PORT



app.listen(PORT,()=> {
    console.log(`App is Running Smooth on ${PORT}`)
})
